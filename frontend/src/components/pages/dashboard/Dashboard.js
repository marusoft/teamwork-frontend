import { CssBaseline, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

import useStyles from "../../../styles";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.dashboard}>
        <Typography variant="h2">hello Dashboard</Typography>
      </div>
    </Fragment>
  );
};

export default Dashboard;
