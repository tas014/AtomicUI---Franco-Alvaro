import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../pages/home';
import Experiment from '../../pages/experiment';
import About from '../../pages/about';
import Lista from '../../pages/lista';




function App() {
<<<<<<< HEAD
  const { user, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
=======
>>>>>>> parent of e6b523a... Instancia de eterno Login
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/lista">
          <Lista />
        </Route>
        <Route path="/experiment">
<<<<<<< HEAD
          {isAuthenticated ? <Experiment /> : <Experiment />}
        </Route>
        <Route path="/login">
          <LogPage />
=======
          <Experiment />
>>>>>>> parent of e6b523a... Instancia de eterno Login
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
