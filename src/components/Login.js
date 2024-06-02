import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    console.log(userData);

    await axios
      .post("http://localhost:4500/api/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          localStorage.setItem("role", res.data.user.roles);
          localStorage.setItem("id", res.data.user.id);
          localStorage.setItem("username", username);

          if (res.data.user.roles === "1") {
            navigate("/Home");
          } else if (res.data.user.roles === "2") {
            navigate("/UserHome");
          }
        }
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      });
  };

  // const ProceedLoginusingAPI = (e) => {
  //     e.preventDefault();
  //     if (validate()) {
  //         ///implentation
  //         // console.log('proceed');
  //         let inputobj={"username": username,
  //         "password": password};
  //         fetch("https://localhost:44308/User/Authenticate",{
  //             method:'POST',
  //             headers:{'content-type':'application/json'},
  //             body:JSON.stringify(inputobj)
  //         }).then((res) => {
  //             return res.json();
  //         }).then((resp) => {
  //             console.log(resp)
  //             if (Object.keys(resp).length === 0) {
  //                 toast.error('Login failed, invalid credentials');
  //             }else{
  //                  toast.success('Success');
  //                  sessionStorage.setItem('username',username);
  //                  sessionStorage.setItem('jwttoken',resp.jwtToken);
  //                usenavigate('/')
  //             }
  //             // if (Object.keys(resp).length === 0) {
  //             //     toast.error('Please Enter valid username');
  //             // } else {
  //             //     if (resp.password === password) {
  //             //         toast.success('Success');
  //             //         sessionStorage.setItem('username',username);
  //             //         usenavigate('/')
  //             //     }else{
  //             //         toast.error('Please Enter valid credentials');
  //             //     }
  //             // }
  //         }).catch((err) => {
  //             toast.error('Login Failed due to :' + err.message);
  //         });
  //     }
  // }
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    // <div className="row">
    //   <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
    //     <form onSubmit={ProceedLogin} className="container">
    //       <div className="card">
    //         <div class="card card-outline card-primary">
    //           <div className="card-header">
    //             <h2>USER LOGIN</h2>
    //           </div>
    //           <div className="card-body">
    //             <div className="form-group">
    //               {/* <label>
    //                 Username <span className="errmsg">*</span>
    //               </label>
    //               <input
    //                 value={username}
    //                 onChange={(e) => usernameupdate(e.target.value)}
    //                 className="form-control"
    //               ></input> */}
    //               <TextField
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 id="email"
    //                 value={username}
    //                 onChange={(e) => usernameupdate(e.target.value)}
    //                 label="Email Address"
    //                 name="email"
    //                 autoComplete="email"
    //                 autoFocus
    //               />
    //             </div>
    //             <div className="form-group">
    //               {/* <label>
    //                 Password <span className="errmsg">*</span>
    //               </label>
    //               <input
    //                 type="password"
    //                 value={password}
    //                 onChange={(e) => passwordupdate(e.target.value)}
    //                 className="form-control"
    //               ></input> */}
    //               <TextField
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 name="password"
    //                 label="Password"
    //                 type="password"
    //                 id="password"
    //                 value={password}
    //                 onChange={(e) => passwordupdate(e.target.value)}
    //                 autoComplete="current-password"
    //               />
    //             </div>
    //           </div>
    //           <div className="card-footer">
    //             {/* <button type="submit" className="btn btn-primary">
    //               Login
    //             </button>{" "} */}
    //             <Button type="submit" variant="outlined">
    //               Login
    //             </Button>{" "}
    //             {/* | */}
    //           </div>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={ProceedLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              value={username}
              onChange={(e) => usernameupdate(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => passwordupdate(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

//  <Link className="btn btn-success" to={"/register"}>
//    New User
//  </Link>;

export default Login;
