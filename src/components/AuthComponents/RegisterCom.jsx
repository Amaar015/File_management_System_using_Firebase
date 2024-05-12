import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../redux/actionsCreators/authActionCreator";
const RegisterCom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Rpassword, setRPassword] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !Rpassword) {
      alert("Please Fill in all Fields?");
      return;
    }
    if (password != Rpassword) {
      alert("Password dose not match");
      return;
    }
    dispatch(signUpUser(name, email, password, setSuccess));
  };
  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success]);
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group my-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="Rpassword"
          name="Rpassword"
          className="form-control"
          placeholder="Retype Password"
          value={Rpassword}
          onChange={(e) => {
            setRPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary my-2 form-control">
        Register
      </button>
    </form>
  );
};

export default RegisterCom;
