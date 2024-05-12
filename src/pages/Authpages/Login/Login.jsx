import React, { useState } from "react";
import LoginCom from "../../../components/AuthComponents/LoginCom";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid">
      <h1 className="display-1 my-5 text-center">Login Form</h1>
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <LoginCom />
          <Link to="/register" className="text-end">
            Not a member? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
