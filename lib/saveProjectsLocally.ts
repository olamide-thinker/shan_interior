// "use server";
// import { getProjects } from "@/components/Comps/getCloudinaryData";
// import fs from "fs";
// import path from "path";
// import crypto from "crypto";

// // Util to generate a hash (to compare data changes)
// function generateHash(data: any): string {
//   return crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
// }

// async function saveProjectsLocally(folderPrefix: string) {
//   const filePath = path.join(
//     process.cwd(),
//     "data",
//     `${folderPrefix.replace(/\//g, "-")}-projects.json`
//   );

//   let localProjects: any[] = [];
//   let localHash = "";

//   // Read local file if it exists
//   if (fs.existsSync(filePath)) {
//     const fileContent = fs.readFileSync(filePath, "utf-8");
//     localProjects = JSON.parse(fileContent);
//     localHash = generateHash(localProjects);
//   }

//   // Fetch latest from Cloudinary
//   const remoteProjects = await getProjects(folderPrefix).catch((err) => {
//     console.error("❌ Error fetching projects:", err);
//     return [];
//   });

//   const remoteHash = generateHash(remoteProjects);

//   // Only write if data has changed
//   if (remoteHash !== localHash) {
//     fs.mkdirSync(path.dirname(filePath), { recursive: true });
//     fs.writeFileSync(
//       filePath,
//       JSON.stringify(remoteProjects, null, 2),
//       "utf-8"
//     );
//     console.log(`✅ Project data updated for ${folderPrefix}`);
//     return remoteProjects;
//   } else {
//     console.log(`✅ No changes in project data for ${folderPrefix}`);
//     return localProjects;
//   }
// }

// export const getStaticProps = async (folderPrefix: string) => {
//   // const folderPrefix = "shanInteriorsProjects/interior projects";

//   const projects = await saveProjectsLocally(folderPrefix);

//   return {
//     props: {
//       projects,
//     },
//     revalidate: 86400, // optional: every 24h
//   };
// };

// export default saveProjectsLocally;
// lib/saveProjects.ts
// lib/saveProjectsLocally.ts
import { getProjects } from "@/components/Comps/getCloudinaryData";
import fs from "fs";
import path from "path";
import crypto from "crypto";

function generateHash(data: any): string {
  return crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
}

export async function saveProjectsLocally(folderPrefix: string) {
  const projects = await getProjects(folderPrefix).catch((err) => {
    console.error("❌ Error fetching projects:", err);
    return [];
  });

  const safeName = folderPrefix.replace(/\//g, "-");
  const filePath = path.join(
    process.cwd(),
    "public", // <-- make it accessible
    "data",
    `${folderPrefix.replace(/\//g, "-")}-projects.json`
  );

  let currentHash = "";
  if (fs.existsSync(filePath)) {
    const existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    currentHash = generateHash(existing);
  }

  const newHash = generateHash(projects);

  if (newHash !== currentHash) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2), "utf-8");
    console.log(`✅ Project data written for ${folderPrefix}`);
  } else {
    console.log(`✅ No changes for ${folderPrefix}`);
  }
}

// scripts/generate-projects.ts
// import { saveProjectsLocally } from "../lib/saveProjectsLocally";

const folders = [
  "shanInteriorsProjects/interior projects",
  "shanInteriorsProjects/3d projects",
];

(async () => {
  for (const folder of folders) {
    await saveProjectsLocally(folder);
  }
})();
