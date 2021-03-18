import { Button, CssBaseline, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

import useStyles from "../../../styles";

const Dashboard = ({ setAuth }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.dashboard}>
        <Typography variant="h2">hello Dashboard</Typography>
        <Button
          onClick={() => setAuth(false)}
          variant="contained"
          color="secondary"
        >
          Logout
        </Button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
