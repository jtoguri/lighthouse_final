import { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import PersonPinOutlined from "@material-ui/icons/PersonPinOutlined";

import axios from "axios";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(user);

    const res = await axios.post("/api/users/register", user);

    console.log(res.data);
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
            <PersonPinOutlined />
          </Avatar>
          <h2>Register</h2>
        </Grid>
        <form onSubmit={handleRegistration}>
          <TextField
            label="First Name"
            placeholder="Enter First Name"
            fullWidth
            // value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></TextField>
          <TextField
            label="Last Name"
            placeholder="Enter Last Name"
            fullWidth
            // value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ margin: "10px 0 0 0" }}
          ></TextField>
          <TextField
            label="Email"
            placeholder="Enter Email"
            fullWidth
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "10px 0 0 0" }}
          ></TextField>
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "10px 0 10px 0" }}
          ></TextField>
          <br></br>
          <br></br>
          <Button
            style={{ margin: "10px 0 20px 0" }}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
            // onClick={() => handleRegistration}
          >
            Register
          </Button>
        </form>
        <Typography style={{ align: "bottom" }}>
          Already have an account? <Link href="login">Sign in</Link>
        </Typography>
      </Paper>
    </Grid>

    // return (
    //   <div>
    //     <h2>Register</h2>
    //     <form onSubmit={handleRegistration}>
    //       <div>
    //         <label htmlFor="first-name">First Name</label>
    //         <input
    //           type="text"
    //           name="first-name"
    //           id="first-name"
    //           value={firstName}
    //           onChange={e => setFirstName(e.target.value)} />
    //       </div>
    //       <div>
    //         <label htmlFor="last-name">Last Name</label>
    //         <input
    //           type="text"
    //           name="last-name"
    //           id="last-name"
    //           value={lastName}
    //           onChange={e => setLastName(e.target.value)} />
    //       </div>
    //       <div>
    //         <label htmlFor="email">Email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           id="email"
    //           value={email}
    //           onChange={e => setEmail(e.target.value)} />
    //       </div>
    //       <div>
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           value={password}
    //           onChange={e => setPassword(e.target.value)} />
    //       </div>
    //       <input type="submit" value="Register" />
    //     </form>
    //   </div>
  );
}
