import React from "react";
import ShowItems from "../Showitems/ShowItems";

const HomeComponent = () => {
  const folders = ["New folder", "New Folder2"];
  const files = ["New files", "New Files"];
  return (
    <div className="col-md-12 w-100">
      <ShowItems title={"Created Folder"} items={folders} />
      <ShowItems title={"Created Files"} items={files} />
    </div>
  );
};

export default HomeComponent;
