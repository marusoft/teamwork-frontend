import { Typography, Link } from "@material-ui/core";
import React, { Fragment } from "react";

const Copyright = () => {
  return (
    <Fragment>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/">
          Teamwork
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Fragment>
  );
};

export default Copyright;
