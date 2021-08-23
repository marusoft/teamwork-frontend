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
import { Redirect, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Copyright from "../createEmployee/Copyright";
import useStyles from "./login.styles";
import { signinUrl } from "../../apis";
import { saveUser, loggedIn } from "../../auth";

const Login = () => {
  const history = useHistory();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email,
        password,
      };
      const login = await fetch(signinUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const loginResult = await login.json();
      console.log('logindata', loginResult)
      const { error } = loginResult;
      if (error) {
        toast.error(error);
      } else {
        saveUser(loginResult);
        toast.success("Register Successfully");
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const classes = useStyles();
  return (
    <Fragment>
      <ToastContainer />
      {loggedIn() === true ? <Redirect to="/dashboard" /> : null}
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.login}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography className={classes.title} variant="h5">
            Login
          </Typography>
          <form onSubmit={onSubmitForm} className={classes.form} noValidate>
            <Grid container spacing={2}>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Fragment>
  );
};

export default Login;
