import { v2 as cloudinary } from 'cloudinary';
import { Project_type } from '@/components/Comps/getCloudinaryData';
import path from 'path';
import fs from 'fs';

// Configure cloudinary with the correct environment variable names
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type CloudinaryFolder = {
  name: string;
  path: string;
};

async function parseProjectMetadata(textFileUrl: string) {
  try {
    const res = await fetch(textFileUrl);
    const text = await res.text();
    const lines = text.split('\n');
    const metadata: any = {};

    lines.forEach(line => {
      const [key, ...values] = line.split(':');
      if (key && values.length) {
        metadata[key.trim().toLowerCase()] = values.join(':').trim();
      }
    });

    return {
      name: metadata.name || metadata.title,
      description: metadata.description || '',
      location: metadata.location || ''
    };
  } catch (err) {
    console.warn(`Failed to parse metadata from ${textFileUrl}`);
    return { name: '', description: '', location: '' };
  }
}

export async function syncCloudinaryToLocal() {
  try {
    const mainFolders = ['shanInteriorsProjects/interior projects', 'shanInteriorsProjects/3d projects'];
    const allProjects: { [key: string]: Project_type[] } = {};

    for (const folderPrefix of mainFolders) {
      const foldersRes = await cloudinary.api.sub_folders(folderPrefix);
      const projectFolders = foldersRes.folders as CloudinaryFolder[];

      const projects = await Promise.all(
        projectFolders.map(async (folder): Promise<Project_type> => {
          const fullPath = folder.path;

          const resourcesRes = await cloudinary.search
            .expression(`folder:"${fullPath}"`)
            .sort_by("public_id", "desc")
            .max_results(100)
            .execute();

          const resources = resourcesRes.resources;

          const images = resources
            .filter((r: any) => r.resource_type === "image")
            .map((r: any) => {
              const parts = r.public_id.split("/");
              const imageName = parts[parts.length - 1];

              return {
                Image_id: imageName,
                image: r.secure_url,
                caption: imageName.replace(/[_-]/g, " "),
              };
            });

          const textFile = resources.find((r: any) => {
            const name = r.public_id.toLowerCase();
            return (
              r.resource_type === "raw" &&
              (name.includes("projectdescription") ||
                name.includes("project description"))
            );
          });

          let metadata = {
            title: folder.name,
            description: "",
            location: "",
          };

          if (textFile) {
            const parsed = await parseProjectMetadata(textFile.secure_url);
            metadata = {
              title: parsed.name || folder.name,
              description: parsed.description,
              location: parsed.location,
            };
          }

          return {
            title: metadata.title,
            location: metadata.location,
            description: metadata.description,
            images,
          };
        })
      );

      // Store projects based on folder type
      const key = folderPrefix.includes('3d') ? '3d' : 'interior';
      allProjects[key] = projects;
    }

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Save each project category
    for (const [category, projects] of Object.entries(allProjects)) {
      const fileName = `shanInteriorsProjects-${category === '3d' ? '3d' : 'interior'} projects-projects.json`;
      fs.writeFileSync(
        path.join(dataDir, fileName),
        JSON.stringify(projects, null, 2)
      );
    }

    return { success: true, message: 'Projects synchronized successfully' };
  } catch (error: any) {
    console.error('Error syncing projects:', error);
    return { success: false, message: error.message };
  }
}
