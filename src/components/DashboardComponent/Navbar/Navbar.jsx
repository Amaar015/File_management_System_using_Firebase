import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignOutUser } from "../../../redux/actionsCreators/authActionCreator";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-white shadow-sm">
      <a href="/dashboard" className="navbar-brand ms-5">
        File management system
      </a>
      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item mx-3">
          <p className="my-0 mt-1">
            <span className="text-dark">Welcom, </span>
            <span className="fw-bold">{user.displayName}</span>
          </p>
        </li>
        <li className="nav-item mx-3">
          <a href="/" className="btn btn-sm btn-success">
            Home
          </a>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => dispatch(SignOutUser())}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
