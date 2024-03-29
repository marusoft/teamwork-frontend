import { Button, CssBaseline, Typography } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"

import useStyles from "../../../styles";
import { loggedInUrl } from "../../apis";
import { getToken } from "../../auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
  const history = useHistory();

  const [name, setName] = useState("");

  

  const getLoggedInUser = async () => {
    const token = getToken();
    try {
      const loggedInUser = await fetch(loggedInUrl, {
        method: "GET",
        headers: { "Authorization": token },
      });
      const loggedUserResult = await loggedInUser.json();
      const { username } = loggedUserResult.data;
      setName(username);
      toast.success("Welcome back your login was successful")
    } catch (error) {
      console.log(error.message);
    }
  };


  const logOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push("/login");
  }

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const classes = useStyles();
  return (
    <Fragment>
       <ToastContainer />
      <CssBaseline />
      <div className={classes.dashboard}>
        <Typography variant="h2">hello Dashboard</Typography>
        <Typography variant="h2">{name}</Typography>
        <Button
          onClick={(e) => logOut(e)}
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
