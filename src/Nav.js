import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(0);

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    if (userRole) {
      setRole(parseInt(userRole)); // Parse the role as an integer
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light ">
        <div>
          <a className="navbar-brand">
            <img
              src="../../dist/img/123.jpg"
              alt="LMS Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">
              Library Management System
            </span>
          </a>
        </div>
        {/* Left navbar links */}
        <ul className="navbar-nav">
          {role === 1 && (
            <>
              <li className="nav-item" style={{ marginRight: "12px" }}>
                <CustomLink to="/Home">Home</CustomLink>
              </li>
              <li className="nav-item" style={{ marginRight: "12px" }}>
                <CustomLink to="/UserRegister">User Register</CustomLink>
              </li>
              <li className="nav-item" style={{ marginRight: "12px" }}>
                <CustomLink to="/BookRegister">Book Register</CustomLink>
              </li>
              <li className="nav-item" style={{ marginRight: "12px" }}>
                <CustomLink to="/CheckedBook">Checked Book List</CustomLink>
              </li>
              <li className="nav-item" style={{ marginRight: "12px" }}>
                <CustomLink to="/test">test Book List</CustomLink>
              </li>
            </>
          )}{" "}
          {role === 2 && (
            <>
              {/* <li className="nav-item">
              <CustomLink to="/About">About</CustomLink>
            </li> */}
              <li className="nav-item" style={{ marginRight: "12px" }}>
                <CustomLink to="/UserHome">Book list</CustomLink>
              </li>
              <li className="nav-item" style={{ marginRight: "12px" }}>
                <CustomLink to="/BookCheckOut">Book CheckOut</CustomLink>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="nav-link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </div>
  );
}
function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}
