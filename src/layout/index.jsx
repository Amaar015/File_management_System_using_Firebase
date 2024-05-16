import { Stack } from "@mui/material";
import React from "react";
import FolderSection from "../sections/FolderSection";

const Editor = () => {
  return (
    <Stack width={"100vw"} height={"100vh"} direction={"row"}>
      <Stack width={"25%"} height={"100%"} sx={{ bgcolor: "#060606" }}>
        <FolderSection />
      </Stack>
      <Stack width={"75%"} height={"100%"} sx={{ bgcolor: "green" }}></Stack>
    </Stack>
  );
};

export default Editor;
