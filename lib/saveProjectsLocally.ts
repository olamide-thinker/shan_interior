"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
// This file handles saving the project data locally on the server side
// Cloudinary data fetcher
import { getProjects } from "@/components/Comps/getCloudinaryData";
import fs from "fs";
import path from "path";

// Function to save project data locally (Server-side only)
async function saveProjectsLocally(folderPrefix: string) {
  const projects = await getProjects(folderPrefix);

  const filePath = path.join(
    process.cwd(),
    "data",
    `${folderPrefix.replace(/\//g, "-")}-projects.json`
  );

  let projectsData: any[] = [];

  // Check if data already exists locally
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    projectsData = JSON.parse(fileContent);
  } else {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2), "utf-8");
    projectsData = projects;
  }

  return projectsData;
}

export const getStaticProps = async () => {
  const folderPrefix = "shanInteriorsProjects/interior projects"; // Example folder path

  // Fetch projects and save locally
  const projects = await saveProjectsLocally(folderPrefix);

  return {
    props: {
      projects, // Pass the projects data to the page
    },
    revalidate: 86400, // Re-fetch every 24 hours (optional)
  };
};

export default saveProjectsLocally;
