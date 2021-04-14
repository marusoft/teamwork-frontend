import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
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
import Dashboard from "../pages/dashboard/Dashboard";

const Header = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const setAuth = (boolean) => {
  //   setIsAuthenticated(boolean);
  // };

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
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
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
  );
};

export default Header;
