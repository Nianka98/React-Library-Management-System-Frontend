import axios from "axios";
import { useEffect, useState } from "react";

function user() {
  const [_id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [user, setState] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:4000/api/user/");
    setState(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/user/", {
        username: username,
        password: password,
        roles: roles,
      });
      alert("User Registation Successfully");
      setId("");
      setUsername("");
      setPassword("");
      setRoles("");
      Load();
    } catch (err) {
      alert("Book Registation Failed");
    }
  }
  async function editUser(book) {
    setUsername(user.username);
    setPassword(user.password);
    setRoles(user.roles);

    setId(user._id);
  }

  async function DeleteUser(_id) {
    await axios.delete("http://localhost:4000/api/user/" + _id);
    alert("User deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put("http://localhost:4000/api/user/" + _id, {
        username: username,
        password: password,
        roles: roles,
      });
      alert("User Updateddddd");
      setId("");
      setUsername("");
      setPassword("");
      setRoles("");
      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* left column */}
            <div className="col-md-6">
              {/* general form elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Book Registation</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form>
                  {/* <div className="card-body"> */}
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="_id"
                      hidden
                      value={_id}
                      onChange={(event) => {
                        setId(event.target.value);
                      }}
                    />

                    <div className="form-group">
                      <label htmlFor="exampleInputBookName">User Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="bookTitle"
                        placeholder="Enter Book Name"
                        value={bookTitle}
                        onChange={(event) => {
                          setBookTitle(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputAuthor">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        id="author"
                        placeholder="Enter author"
                        value={author}
                        onChange={(event) => {
                          setAuthor(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        id="publisher"
                        placeholder="Enter publisher"
                        value={publisher}
                        onChange={(event) => {
                          setPublisher(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(event) => {
                          setQuantity(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={save}
                    >
                      Submit
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={update}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

//    <div class="form-group">
//             <input
//               type="text"
//               class="form-control"
//               id="_id"
//               hidden
//               value={_id}
//               onChange={(event) => {
//                 setId(event.target.value);
//               }}
//             />

// <div class="form-group">
//         <input
//           type="text"
//           class="form-control"
//           id="_id"
//           hidden
//           value={_id}
//           onChange={(event) => {
//             setId(event.target.value);
//           }}
//         />

//    <div>
//      <button class="btn btn-primary mt-4" onClick={save}>
//        Register
//      </button>
//      <button class="btn btn-warning mt-4" onClick={update}>
//        Update
//      </button>
// </div>;

// Navbar.js

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/BookRegister">BookRegister</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// export default user;

// Navigation bar
<nav className="nav">
  {/* <Link to="/" className="site-title">
        Library Management System
      </Link>
      <ul>
        {role === 1 ? (
          <>
            <CustomLink to="/UserRegister">User Register</CustomLink>
            <CustomLink to="/BookRegister">Book Register</CustomLink>
          </>
        ) : null}
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/BookCheckOut">Book Check-Out</CustomLink>
        <CustomLink to="/UserHome">Book List</CustomLink>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul> */}

  {/* {" "} */}
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
          <ul>
            {role === 1 ? (
              <>
                <li className="nav-item">
                  <CustomLink to="/UserRegister">User Register</CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink to="/BookRegister">Book Register</CustomLink>
                </li>
              </>
            ) : null}
            <li className="nav-item">
              <CustomLink to="/About">About</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/BookCheckOut">Book CheckOut</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/UserHome">Book list</CustomLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>{" "}
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
</nav>;
