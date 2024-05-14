import React from "react";
import { FaFileArrowUp, FaFolderPlus } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import "./Subbar.css";

const Subbar = ({ SetisCreateFolder }) => {
  return (
    <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 overflow-hidden ">
      <p>Root</p>
      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item mx-2">
          <button className="btn btn-outline-dark">
            {" "}
            <FaFileArrowUp /> Upload File
          </button>
        </li>
        <li className="nav-item mx-2 ">
          <button className="btn btn-outline-dark">
            {" "}
            <FaFileAlt /> Create File
          </button>
        </li>
        <li className="nav-item mx-2">
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              SetisCreateFolder(true);
            }}
          >
            {" "}
            <FaFolderPlus /> Create Folder
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Subbar;
