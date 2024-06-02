import React from "react";

const About = () => {
  return (
    <div>
      {" "}
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <a href="../../index3.html" className="navbar-brand">
            <img
              src="../../dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">
              Library Management System
            </span>
          </a>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="index3.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/UserRegister" className="nav-link">
                  User Registation
                </a>
              </li>
            </ul>
            {/* SEARCH FORM */}
            <form className="form-inline ml-0 ml-md-3">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
      {/* /.navbar */}
    </div>
  );
};

export default About;
