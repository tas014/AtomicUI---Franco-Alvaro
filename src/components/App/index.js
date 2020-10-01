import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../../pages/home';
import Experiment from '../../pages/experiment';
import About from '../../pages/about';
import Lista from '../../pages/lista';



function App() {
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
          <Lista/>
        </Route>
        <Route path="/experiment">
          <Experiment />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
