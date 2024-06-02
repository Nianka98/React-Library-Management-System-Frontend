import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    // <div className="container-fluid">
    //   <nav className="main-header navbar navbar-expand-md navbar-light navbar-white ">
    //     {/* <div className="container"> */}
    //     <div>
    //       <img
    //         src="../../dist/img/000.jpg"
    //         alt="LMS Logo"
    //         className="brand-image img-circle elevation-3"
    //         style={{ opacity: ".8" }}
    //       />
    //     </div>
    //     <div>
    //       <a className="navbar-brand">
    //         <lable> Library Management System </lable>
    //       </a>
    //     </div>
    //     <div></div>
    //     <div className="collapse navbar-collapse order-3" id="navbarCollapse">
    //       {/* Left navbar links */}
    //       <ul className="navbar-nav">
    //         {role === 1 && (
    //           <>
    //             <li className="nav-item" style={{ marginRight: "12px" }}>
    //               <CustomLink to="/Home">Home</CustomLink>
    //             </li>
    //             <li className="nav-item" style={{ marginRight: "12px" }}>
    //               <CustomLink to="/UserRegister">User Register</CustomLink>
    //             </li>
    //             <li className="nav-item" style={{ marginRight: "12px" }}>
    //               <CustomLink to="/BookRegister">Book Register</CustomLink>
    //             </li>
    //             <li className="nav-item" style={{ marginRight: "12px" }}>
    //               <CustomLink to="/CheckedBook">Checked Book List</CustomLink>
    //             </li>
    //             <li className="nav-item" style={{ marginRight: "12px" }}>
    //               <CustomLink to="/sample">sample</CustomLink>
    //             </li>
    //           </>
    //         )}
    //         {role === 2 && (
    //           <>
    //             {/* <li className="nav-item">
    //           <CustomLink to="/About">About</CustomLink>
    //         </li> */}
    //             <li className="nav-item" style={{ marginRight: "12px" }}>
    //               <CustomLink to="/UserHome">Book list</CustomLink>
    //             </li>
    //             {/* <li className="nav-item" style={{ marginRight: "12px" }}>
    //               <CustomLink to="/BookCheckOut">Book CheckOut</CustomLink>
    //             </li> */}
    //             <li className="nav-item" style={{ marginRight: "12px" }}>
    //               <CustomLink to="/BookGallery">Book Gallery</CustomLink>
    //             </li>
    //           </>
    //         )}
    //       </ul>

    //       {/* SEARCH FORM */}
    //       <form className="form-inline ml-0 ml-md-3">
    //         <div className="input-group input-group-sm">
    //           <input
    //             className="form-control form-control-navbar"
    //             type="search"
    //             placeholder="Search"
    //             aria-label="Search"
    //           />
    //           <div className="input-group-append">
    //             <button className="btn btn-navbar" type="submit">
    //               <i className="fas fa-search" />
    //             </button>
    //           </div>
    //         </div>
    //       </form>

    //       {/* Right navbar links */}
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <button className="nav-link" onClick={handleLogout}>
    //             Logout
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //     {/* </div> */}
    //   </nav>
    // </div>
    <Toolbar sx={{ flexWrap: "wrap" }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        Company name
      </Typography>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Features
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Enterprise
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          Support
        </Link>
      </nav>
      <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
        Login
      </Button>
    </Toolbar>
  );
}

function CustomLink({ to, children }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}
