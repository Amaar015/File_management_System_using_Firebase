import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dashboard, Home, Login, Register } from "./pages";
import { CheckisLoggedIn } from "./redux/actionsCreators/authActionCreator";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CheckisLoggedIn());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
