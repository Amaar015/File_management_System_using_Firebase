import React, { useEffect, useState } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/DashboardComponent/Navbar/Navbar";
import Subbar from "../../components/DashboardComponent/SubBar/Subbar";
import HomeComponent from "../../components/DashboardComponent/HomeComponent/HomeComponent";
import CreateFolder from "../../components/DashboardComponent/CreateFolder/CreateFolder";
import { getFolders } from "../../redux/actionsCreators/fileFolderActionCreator";
const Dashboard = () => {
  const [isCreateFolderModalOpen, SetisCreateFolderModalOpen] = useState(false);
  const { isLoggedIn, isLoading, userId } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.fileFolder.isLoading,
      userId: state.auth.user.uid,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);
  console.log(isLoggedIn);
  useEffect(() => {
    if (isLoggedIn && !isLoading) {
      dispatch(getFolders(userId));
    }
  }, [isLoading, isLoggedIn, dispatch]);
  return (
    <>
      {isCreateFolderModalOpen && (
        <CreateFolder SetisCreateFolder={SetisCreateFolderModalOpen} />
      )}
      <Navbar />
      <Subbar SetisCreateFolder={SetisCreateFolderModalOpen} />
      <HomeComponent />
    </>
  );
};

export default Dashboard;
