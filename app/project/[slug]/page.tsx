import React from "react";
import { getProjects } from "@/components/Comps/getCloudinaryData";
import { MainSlider } from "@/components/Comps/mainSlider";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Function to convert project title to slug format
function titleToSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-');
}

// Function to get a specific project by slug
async function getProjectBySlug(slug: string) {
  try {
    // Get all projects from both interior and 3D projects
    const [interiorProjects, threeDProjects] = await Promise.all([
      getProjects("shanInteriorsProjects/interior projects"),
      getProjects("shanInteriorsProjects/3D projects")
    ]);
    
    const allProjects = [...interiorProjects, ...threeDProjects];
    
    // Find project by matching slug
    const project = allProjects.find(project => 
      titleToSlug(project.title) === slug
    );
    
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = {
    title: project.title,
    location: project.location,
    description: project.description,
    images: project.images,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-muted-foreground text-lg">{project.location}</p>
        </div>
        
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <MainSlider content={content} showOpenButton={false} />
        </div>
      </div>
    </div>
  );
}

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  try {
    const [interiorProjects, threeDProjects] = await Promise.all([
      getProjects("shanInteriorsProjects/interior projects"),
      getProjects("shanInteriorsProjects/3D projects")
    ]);
    
    const allProjects = [...interiorProjects, ...threeDProjects];
    
    return allProjects.map((project) => ({
      slug: titleToSlug(project.title),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}