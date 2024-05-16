import FolderIcon from "@mui/icons-material/Folder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const Folder_data = [
  {
    folderId: 1,
    name: "Portfolio",
    createdby: "Amaar",
    createdAt: "27-07-2025",
    path: "web_development/main/portfolio",
    type: "folder",
    // icon: <FolderIcon />,
  },
  {
    folderId: 2,
    name: "Fit-Gym-website",
    createdby: "Amaar",
    createdAt: "27-07-2025",
    path: "web_development/main/portfolio",
    type: "folder",
    // icon: <FolderIcon />,
  },
  {
    folderId: 3,
    name: "Bare-log-portfolio",
    createdby: "Amaar",
    createdAt: "27-07-2025",
    path: "web_development/main/portfolio",
    type: "folder",
    // icon: <FolderIcon />,
  },
  {
    folderId: 4,
    name: "Hussain-App-website",
    createdby: "Amaar",
    createdAt: "27-07-2025",
    path: "web_development/main/portfolio",
    type: "folder",
    // icon: <FolderIcon />,
  },
];

const sub_folder = [
  {
    SubfolderId: 1,
    folderId: 1,
    SubfolderName: "assets",
    createdby: "Amaar",
    createdAt: "27-07-2025",
    path: "web_development/main/portfolio/",
    type: "folder",
    // icon: <FolderIcon />,
  },
  {
    SubfolderId: 2,
    folderId: 1,
    SubfolderName: "css",
    createdby: "Amaar",
    createdAt: "27-07-2025",
    path: "web_development/main/portfolio/",
    type: "file",
    // icon: <FolderIcon />,
  },
  {
    SubfolderId: 3,
    folderId: 1,
    SubfolderName: "javascript",
    createdby: "Amaar",
    createdAt: "27-07-2025",
    path: "web_development/main/portfolio/",
    type: "folder",
    // icon: <FolderIcon />,
  },
  {
    SubfolderId: 4,
    folderId: 1,
    SubfolderName: "fonts",
    createdby: "Amaar",
    createdAt: "27-07-2025",
    path: "web_development/main/portfolio/",
    type: "folder",
    // icon: <FolderIcon />,
  },
];

const files = [
  {
    name: "index.html",
    parentId: 1,
    data: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <h2>Welcome to Bare Log</h2>
        </body>
        </html>
        `,
    createdAt: "27-05-2025",
    createdby: "Amaar",
    type: "file",
    // icon: <TextSnippetIcon />,
  },
  {
    name: "about.html",
    parentId: 1,
    data: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h2>About Bare Log</h2>
        </body>
        </html>
        `,
    createdAt: "27-05-2025",
    createdby: "Amaar",
    type: "file",
    // icon: <TextSnippetIcon />,
  },
  {
    name: "script.js",
    parentId: 1,
    data: `
console.log("Welcome Bare Log");
`,
    createdAt: "27-05-2025",
    createdby: "Amaar",
    type: "file",
    // icon: <TextSnippetIcon />,
  },
];
export { Folder_data, sub_folder, files };
