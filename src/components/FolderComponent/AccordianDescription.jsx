import React, { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function AccordianSummary({ Folder, subFolder }) {
  const [expandedFolders, setExpandedFolders] = useState({});

  const handleExpand = (folderId) => {
    setExpandedFolders((prevExpanded) => ({
      ...prevExpanded,
      [folderId]: !prevExpanded[folderId],
    }));
  };

  return (
    <>
      {Folder.map((data) => (
        <AccordionSummary
          key={data.folderId}
          sx={{ flexDirection: "row-reverse", marginTop: "-1rem" }}
          expandIcon={
            subFolder.some((sub) => sub.folderId === data.folderId) ? (
              expandedFolders[data.folderId] ? (
                <IconButton onClick={() => handleExpand(data.folderId)}>
                  <ExpandMoreIcon sx={{ color: "#fff" }} />
                </IconButton>
              ) : (
                <IconButton onClick={() => handleExpand(data.folderId)}>
                  <ExpandLessIcon sx={{ color: "#fff" }} />
                </IconButton>
              )
            ) : null
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ color: "#fff" }}>{data.name}</Typography>
        </AccordionSummary>
      ))}
    </>
  );
}

// export default function AccordianDesciptionFolder({SubFolder}){
//            return (
//             <>
//                    <Stack
//                       sx={{ marginLeft: "40px" }}
//                       direction={"row"}
//                       spacing={1}
//                     >
//                       <FolderIcon
//                         sx={{
//                           color: "#fff",
//                           width: "1.3rem",
//                           height: "1.3rem",
//                         }}
//                       />
//                       <Typography sx={{ color: "#fff" }}>
//                          <AccordianSummary Folder={SubFolder} subFolder={[]}/>
//                       </Typography>
//                     </Stack>
//             </>
//            )
// }
