import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dy4rxwp5y",
  api_key: "791838416434669",
  api_secret: "72timMxi0uCExGyRxp1qR5LA_wU",
});

export type Project_type = {
  title: string;
  location: string;
  description: string;
  images: {
    Image_id: string;
    image: string;
    caption: string;
  }[];
};

type CloudinaryFolder = {
  name: string;
  path: string;
};

export async function getProjects(
  folderPrefix: string
): Promise<Project_type[]> {
  //   const folderPrefix = "shanInteriorsProjects/interior projects";

  const foldersRes = await cloudinary.api.sub_folders(folderPrefix);
  const projectFolders = foldersRes.folders as CloudinaryFolder[];

  const projects = await Promise.all(
    projectFolders.map(
      async (folder: CloudinaryFolder): Promise<Project_type> => {
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
            const imageName = parts[parts.length - 1]; // Get file name from path

            return {
              Image_id: imageName,
              image: r.secure_url,
              caption: imageName.replace(/[_-]/g, " "), // Optional: make caption human-readable
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
          try {
            const res = await fetch(textFile.secure_url);
            const text = await res.text();
            const parsed = parseProjectMetadata(text);
            metadata = {
              title: parsed.name || folder.name,
              description: parsed.description,
              location: parsed.location,
            };
          } catch (err) {
            console.warn(
              `Failed to fetch or parse description from ${textFile.secure_url}`
            );
          }
        }

        return {
          title: metadata.title,
          location: metadata.location,
          description: metadata.description,
          images,
        };
      }
    )
  );

  return projects;
}

function parseProjectMetadata(text: string) {
  const lines = text.split("\n");
  const data: { [key: string]: string } = {};

  lines.forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length > 0) {
      const cleanKey = key.trim().toLowerCase();
      const value = rest.join(":").trim();
      data[cleanKey] = value;
    }
  });

  return {
    name: data["name"] || data["title"] || "Unnamed Project",
    description: data["description"] || "",
    location: data["location"] || "",
  };
}
