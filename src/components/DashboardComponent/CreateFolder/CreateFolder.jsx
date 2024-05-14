import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createFolder } from "../../../redux/actionsCreators/fileFolderActionCreator";
const CreateFolder = ({ SetisCreateFolder }) => {
  const [folderName, SetfolderName] = useState("");

  const { userFolders, user, currentFolder } = useSelector(
    (state) => ({
      userFolders: state.fileFolder.userFolders,
      user: state.auth.user,
      currentFolder: state.fileFolder.currentFolder,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const checkFolderAlreadyPresent = (name) => {
    const folderPresent = userFolders.find((folder) => (folder.name = name));
    if (folderPresent) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (folderName) {
      if (folderName.length > 3) {
        if (!checkFolderAlreadyPresent(folderName)) {
          const data = {
            createdAt: new Date(),
            name: folderName,
            userId: user.displayName,
            path: currentFolder == "root" ? [] : ["parent folder path!"],
            parent: currentFolder,
            lastAcessed: null,
            updatedAt: new Date(),
          };
          dispatch(createFolder(data));
        } else {
          alert("Folder Already present");
        }
      } else {
        alert("Folder name must be greater than 3 characters");
      }
    } else {
      alert("Folder name can't be Emplty");
    }
  };

  return (
    <div
      className="col-md-12  position-fixed top-0 left-0 w-100 h-100"
      style={{ background: "rgba(0,0,0,0.4)", zIndex: 999 }}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 mt-5 bg-white rounded p-4">
          <div className="d-flex justify-content-between">
            <h4>Create Folder</h4>
            <button className="btn" onClick={() => SetisCreateFolder(false)}>
              <FaTimes className="text-black" />
            </button>
          </div>
          <hr />
          <div className="d-flex flex-column align-items-center">
            <form className="mt-3 w-100" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="folderName"
                  placeholder="Folder Name"
                  value={folderName}
                  onChange={(e) => SetfolderName(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary mt-5 form-control"
                type="submit"
              >
                Create Folder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFolder;
