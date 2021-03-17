import { CssBaseline, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

import useStyles from "../../../styles";

const Register = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.register}>
        <Typography variant="h2">Hello New user</Typography>
      </div>
    </Fragment>
  );
};

export default Register;
