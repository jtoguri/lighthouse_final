import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../UserContext";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlined from "@material-ui/icons/LockOutlined";

import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { accessToken, setAccessToken } = useContext(TokenContext);

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    const res = await axios.post("/api/users/login", userData);

    console.log(res.data);

    if (res.data.error) {
      setPassword("");
      setLoginError(res.data.error)
      return;
    }

    setAccessToken(res.data.accessToken);

    navigate("/", { replace: true });
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "500px",
    margin: "50px auto",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "rgb(23, 147, 255)" }}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
          {loginError && <p className="login-error">{loginError}</p>}
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter email"
          fullWidth
          value={email}
          onChange={(e) => (setEmail(e.target.value), setLoginError(""))}
        ></TextField>
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => (setPassword(e.target.value),
          setLoginError(""))}
          style={{ margin: "10px 0 10px 0" }}
        ></TextField>
        <br></br>
        <FormControlLabel
          style={{ float: "left" }}
          label="Remember me"
          control={
            <Checkbox
              // checked={checked}
              // onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              color="primary"
            />
          }
        />
        <br></br>
        <br></br>
        <Button
          style={{ margin: "10px 0 20px 0" }}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Typography style={{ align: "bottom" }}>
          Don't have an account? <Link href="register">Register</Link>
        </Typography>
      </Paper>
    </Grid>

    // <div>
    //   <h1>Login to Lighthouse Final</h1>
    //   <form className="login-form" onSubmit={handleLogin}>
    //     <div className="form-row">
    //       <label htmlFor="inputEmail">Email</label>
    //       <input type="email" className="form-control" id="inputEmail"
    //         value={email} onChange={e => setEmail(e.target.value)}/>
    //     </div>
    //     <div className="form-row">
    //       <label htmlFor="inputPassword">Password</label>
    //       <input type="password" className="form-control" id="inputPassword"
    //         value={password} onChange={e => setPassword(e.target.value)}/>
    //     </div>
    //     <div>
    //       <input type="submit"/>
    //     </div>
    //   </form>
    // </div>
  );
}
