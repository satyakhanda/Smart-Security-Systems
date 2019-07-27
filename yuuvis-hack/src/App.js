import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={HomePage} />
        {/* <Route exact path="/signUp" component={HomePage} />
        <Route exact path="/logIn" component={HomePage} />
        <Route exact path="/account/dashboard" component={Status} />
        <Route exact path="/account/provisioning" component={Status} />
        <Route exact path="/account/settings" component={Status} />
        <Route exact path="/account/analytics" component={Status} /> 
        <Route exact path="/account/query" component={Status} />
        <Route exact path="/account/reporting" component={Status} /> */}
      </Switch>
    </Router>
  );
}

export default App;

