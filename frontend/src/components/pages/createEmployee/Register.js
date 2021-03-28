import {
  Avatar,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  Button,
  Link,
  Box,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import React, { Fragment, useState } from "react";

import Copyright from "./Copyright";
import useStyles from "./register.styles";
import { signupUrl } from "../../apis";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    jobrole: "",
    department: "",
    email: "",
    password: "",
    address: "",
  });

  const {
    username,
    firstname,
    lastname,
    gender,
    jobrole,
    department,
    email,
    password,
    address,
  } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        username,
        firstname,
        lastname,
        gender,
        jobrole,
        department,
        email,
        password,
        address,
      };
      const register = await fetch(signupUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const registerResult = await register.json();

      localStorage.setItem("token", registerResult.data.token);
      setAuth(true);
      console.log("R2", registerResult);
    } catch (error) {
      console.log(error.message);
    }
  };

  const classes = useStyles();
  return (
    <Fragment>
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.register}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography className={classes.title} variant="h5">
            Register Employee
          </Typography>
          <form onSubmit={onSubmitForm} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="uname"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={username}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="Firstname"
                  autoFocus
                  value={firstname}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  name="lastname"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Lastname"
                  autoFocus
                  value={lastname}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="gender"
                  name="gender"
                  variant="outlined"
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  autoFocus
                  value={gender}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="jobrole"
                  name="jobrole"
                  variant="outlined"
                  required
                  fullWidth
                  id="jobrole"
                  label="Jobrole"
                  autoFocus
                  value={jobrole}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="department"
                  name="department"
                  variant="outlined"
                  required
                  fullWidth
                  id="department"
                  label="Department"
                  autoFocus
                  value={department}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="address"
                  id="address"
                  autoComplete="current-password"
                  value={address}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create Employee
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Register;
