/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            PrivoBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location === "/" ? "active" : " "} `}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location === "/about" ? "active" : " "
                  } `}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div className="d-flex">
                <Link
                  to="/login"
                  role="button"
                  className="btn mx-2 btn-warning"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  role="button"
                  className="btn mx-2 btn-warning"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <Link
                  to="/"
                  role="button"
                  className="btn mx-2 btn-warning"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  Log Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
