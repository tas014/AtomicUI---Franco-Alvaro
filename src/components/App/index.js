import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from '../../pages/home';
import Experiment from '../../pages/experiment';
import About from '../../pages/about';
import Lista from '../../pages/lista';
import LogPage from '../../pages/login';
import { useAuth0 } from '@auth0/auth0-react';




function App() {
  const { user, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Home /> : <Redirect to='/login' />}
        </Route>
        <Route path="/about">
          {isAuthenticated ? <About /> : <Redirect to='/login' />}
        </Route>
        <Route path="/lista">
          {isAuthenticated ? <Lista /> : <Redirect to='/login' />}
        </Route>
        <Route path="/experiment">
          {isAuthenticated ? <Experiment /> : <Experiment />}
        </Route>
        <Route path="/login">
          <LogPage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
