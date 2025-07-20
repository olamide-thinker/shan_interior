"use client";
import React, { useEffect, useState } from "react";
import { ProjectCard } from "../Comps/projectCard";
import { CircleLoader } from "react-spinners";
import { priorityProjects } from "@/config/priorityProjects";
import Link from "next/link";

type ProjectListProps = {
  projectFolderPrefix: string;
  isFull: boolean;
};

const formatFileName = (folderPrefix: string) =>
  folderPrefix.replace(/\//g, "-") + "-projects.json";

const ProjectList = ({ projectFolderPrefix, isFull }: ProjectListProps) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const sortProjectsByPriority = (projects: any[], type: '3d' | 'interior' | 'featured') => {
    const priorityList = priorityProjects[type] || [];



    // Create two arrays: priority projects and non-priority projects
    const priorityItems = [];
    const otherItems = [];

    for (const project of projects) {
      if (priorityList.includes(project.title)) {
        // Insert at the same index as in priorityList to maintain order
        const index = priorityList.indexOf(project.title);
        priorityItems[index] = project;
      } else {
        otherItems.push(project);
      }
    }

    // Filter out any undefined entries from priorityItems (in case some priority projects weren't found)
    const sortedPriorityItems = priorityItems.filter(item => item !== undefined);

    // Combine the arrays
    return [...sortedPriorityItems, ...otherItems];
  };

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

        // Determine the project type based on the folder prefix
        const projectType = projectFolderPrefix.includes('3d') ? '3d' :
                          projectFolderPrefix.includes('interior') ? 'interior' : 'featured';

        // Sort the projects based on priority
        const sortedProjects = sortProjectsByPriority(data, projectType);
        setProjects(sortedProjects);
      } catch (error) {
        console.error("❌ Error loading project data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectFolderPrefix]);

  if (loading) return <div>Loading projects...</div>;

  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
        {(isFull ? projects : projects.slice(0, windowWidth>=1400 ? 4: 3)).map((d, i) => (
          <div key={i} className="w-full">
            <ProjectCard details={d} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Card = ({ href, image, text, className }: any) => {
  const [imageLoading, setImageLoading] = React.useState(true);

  return (
    <Link href={href || ""} className={className}>
      <div className="relative overflow-hidden">
        {imageLoading && (
          <div className={'absolute h-full w-full bg-black/50 z-30 flex justify-center items-center'}>
            <CircleLoader
              size={50}
              color="#ffffff"
              loading={true}
            />
          </div>
        )}
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          onLoadingComplete={() => setImageLoading(false)}
          onError={() => setImageLoading(false)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{text}</h3>
      </div>
    </Link>
  );
};

export default ProjectList;
