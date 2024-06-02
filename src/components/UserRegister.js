import axios from "axios";
import { useEffect, useState } from "react";

function UserRegister() {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [user, setState] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:4500/api/user/");
    setState(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4500/api/user/", {
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
  async function editUser(user) {
    setUsername(user.username);
    setPassword(user.password);
    setRoles(user.roles);

    setId(user._id);
  }

  async function DeleteUser(_id) {
    await axios.delete("http://localhost:4500/api/user/" + _id);
    alert("Book deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.put("http://localhost:4500/api/user/" + id, {
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
            <div className="col-md-40">
              {/* general form elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">User Registation</h3>
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
                      value={id}
                      onChange={(event) => {
                        setId(event.target.value);
                      }}
                    />
                    <div className="form-group">
                      <label htmlFor="exampleInputUsername">User Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="text"
                        className="form-control"
                        id="roles"
                        placeholder="Role"
                        value={roles}
                        onChange={(event) => {
                          setRoles(event.target.value);
                        }}
                      />
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="roles">Role</label>
                      <select
                        className="form-control"
                        id="roles"
                        value={roles}
                        onChange={(event) => {
                          setRoles(event.target.value);
                        }}
                      >
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                      </select>
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
                      Update
                    </button>
                  </div>
                </form>
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>

      <table class="table table-bordered  table-striped" align="center">
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">User Username</th>
            <th scope="col">User Password</th>
            {/* <th scope="col">User Role</th> */}
          </tr>
        </thead>

        <tbody>
          {user.map((item) => (
            <tr>
              <th scope="row">{item.id} </th>
              <td>{item.username}</td>
              <td>{item.password}</td>
              {/* <td>{item.roles}</td> */}

              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => editUser(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => DeleteUser(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserRegister;
