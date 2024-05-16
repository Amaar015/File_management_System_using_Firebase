import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Folder_data, sub_folder } from "../../Data/FolderData";
import FolderIcon from "@mui/icons-material/Folder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const MainFolder = () => {
  const [expandedFolders, setExpandedFolders] = useState({});

  const handleExpand = (folderId) => {
    setExpandedFolders((prevExpanded) => ({
      ...prevExpanded,
      [folderId]: !prevExpanded[folderId],
    }));
  };

  return (
    <Stack direction={"column"} sx={{ marginTop: "1rem" }} spacing={-2}>
      {Folder_data.map((data, index) => (
        <Accordion sx={{ bgcolor: "#060606", padding: "0" }}>
          <AccordionSummary
            sx={{ flexDirection: "row-reverse" }}
            expandIcon={
              sub_folder.some((sub) => sub.folderId === data.folderId) ? (
                expandedFolders[data.folderId] ? (
                  <IconButton>
                    <ExpandMoreIcon sx={{ color: "#fff" }} />
                  </IconButton>
                ) : (
                  <IconButton>
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
          {sub_folder.map((subFolder) => (
            <>
              {data.folderId == subFolder.folderId ? (
                <AccordionDetails sx={{ marginTop: "-1rem" }}>
                  {subFolder.type == "folder" ? (
                    <Stack
                      sx={{ marginLeft: "40px" }}
                      direction={"row"}
                      spacing={1}
                    >
                      <FolderIcon
                        sx={{
                          color: "#fff",
                          width: "1.3rem",
                          height: "1.3rem",
                        }}
                      />
                      <Typography sx={{ color: "#fff" }}>
                        {subFolder.SubfolderName}
                      </Typography>
                    </Stack>
                  ) : (
                    <Stack
                      sx={{ marginLeft: "40px" }}
                      direction={"row"}
                      spacing={1}
                    >
                      <TextSnippetIcon
                        sx={{
                          color: "#fff",
                          width: "1.3rem",
                          height: "1.3rem",
                        }}
                      />
                      <Typography sx={{ color: "#fff" }}>
                        {subFolder.SubfolderName}
                      </Typography>
                    </Stack>
                  )}
                </AccordionDetails>
              ) : null}
            </>
          ))}
        </Accordion>
      ))}
    </Stack>
  );
};

export default MainFolder;
