import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Login from "../pages/login/Login";
import Register from "../pages/createEmployee/Register";
import Dashboard from "../pages/dashboard/Dashboard"

const Header = () => {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <HomeIcon />
          <Typography variant="h6">Teamwork</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Router>
          <div>
            <Container>
              <Switch>
                <Route
                  exact
                  path="/login"
                  render={(props) => <Login {...props} />}
                />
                <Route
                  exact
                  path="/register"
                  render={(props) => <Register {...props} />}
                />
                <Route
                  exact
                  path="/dashboard"
                  render={(props) => <Dashboard {...props} />}
                />
              </Switch>
            </Container>
          </div>
        </Router>
      </main>
    </Fragment>
  )
}

export default Header;
