import { CssBaseline, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

import useStyles from "../../../styles";

const Login = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.login}>
        <Typography variant="h2">Hello Login</Typography>
      </div>
    </Fragment>
  );
};

export default Login;
