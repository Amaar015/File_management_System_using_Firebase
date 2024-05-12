import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/DashboardComponent/Navbar/Navbar";
import Subbar from "../../components/DashboardComponent/SubBar/Subbar";
import HomeComponent from "../../components/DashboardComponent/HomeComponent/HomeComponent";
const Dashboard = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Navbar />
      <Subbar />
      <HomeComponent/>
    </>
  );
};

export default Dashboard;
