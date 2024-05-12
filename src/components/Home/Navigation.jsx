import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignOutUser } from "../../redux/actionsCreators/authActionCreator";

const Navigation = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <a href="#" className="navbar-brand ms-5">
        React Firebase File management system
      </a>
      <ul className="navbar-nav ms-auto me-5">
        {isAuthenticated ? (
          <>
            <li className="nav-item mx-3">
              <p className="my-0 mt-1">
                <span className="text-light">Welcom, </span>
                <span className="text-warning">{user.displayName}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <a href="/dashboard" className="btn btn-sm btn-primary">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-success btn-sm"
                onClick={() => dispatch(SignOutUser())}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item mx-3">
              <a href="/login" className="btn btn-sm btn-primary">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/register" className="btn btn-success btn-sm">
                Register
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
