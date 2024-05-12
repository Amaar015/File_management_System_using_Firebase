import React from "react";
import RegisterCom from "../../../components/AuthComponents/RegisterCom";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container-fluid">
      <h1 className="display-1 my-5 text-center">Reigister Here</h1>
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <RegisterCom />
          <Link to="/login" className="text-end">
            ALready have account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
