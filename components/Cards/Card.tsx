"use client";
import saveProjectsLocally from "@/lib/saveProjectsLocally";
import { ProjectCard } from "../Comps/projectCard";
import { useEffect, useState } from "react";

type ProjectListProps = {
  projectFolderPrefix: string;
  isFull: boolean;
};

// export default ProjectList;
const ProjectList = ({ projectFolderPrefix, isFull }: ProjectListProps) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch or load projects data locally
        const projectsData = await saveProjectsLocally(projectFolderPrefix);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching or loading projects:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProjects();
  }, [projectFolderPrefix]);

  if (loading) return <div>Loading projects...</div>;

  return (
    <div className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {isFull
        ? projects.map((d, i) => (
            <div key={i} className="relative w-full max-w-md">
              <ProjectCard details={d} />
            </div>
          ))
        : projects.slice(0, 3).map((d, i) => (
            <div key={i} className="relative w-full max-w-md">
              <ProjectCard details={d} />
            </div>
          ))}
    </div>
  );
};

export default ProjectList;
