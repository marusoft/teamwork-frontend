import { Button, CssBaseline, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

import useStyles from "../../../styles";

const Login = ({ setAuth }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.login}>
        <Typography variant="h2">Hello Login</Typography>
        <Button onClick={() => setAuth(true)} variant="contained" color="primary">Authenticate</Button>
      </div>
    </Fragment>
  );
};

export default Login;
