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
import React, { Fragment } from "react";

import Copyright from "./Copyright";
import useStyles from "./register.styles";

const Register = () => {
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
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="uname"
                  name="userName"
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Firstname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Lastname"
                  autoFocus
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
