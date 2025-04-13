"use client";
import { useEffect, useState } from "react";
import { ProjectCard } from "../Comps/projectCard";

type ProjectListProps = {
  projectFolderPrefix: string;
  isFull: boolean;
};

const formatFileName = (folderPrefix: string) =>
  folderPrefix.replace(/\//g, "-") + "-projects.json";

const ProjectList = ({ projectFolderPrefix, isFull }: ProjectListProps) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("file name ", formatFileName(projectFolderPrefix));
  console.log("projectFolderPrefix ", projectFolderPrefix);
  console.log("projects ", projects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fileName = formatFileName(projectFolderPrefix);
        const res = await fetch(`/data/${fileName}`);
        if (!res.ok) throw new Error("Failed to fetch project data.");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("❌ Error loading project data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectFolderPrefix]);

  if (loading) return <div>Loading projects...</div>;

  return (
    <div className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {(isFull ? projects : projects.slice(0, 3)).map((d, i) => (
        <div key={i} className="relative w-full max-w-md">
          <ProjectCard details={d} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
