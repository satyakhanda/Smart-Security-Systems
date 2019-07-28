import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './pages/HomePage';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Landing from './pages/SignIn';
import Search from './pages/Search';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={Landing} />
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/account/dashboard" component={Status} />
        <Route exact path="/account/searchresults" component={Status} /> */}
        {/* <Route exact path="/account/settings" component={Status} />
        <Route exact path="/account/analytics" component={Status} /> 
        <Route exact path="/account/query" component={Status} />
        <Route exact path="/account/reporting" component={Status} /> */}
      </Switch>
    </Router>
  );
}

export default App;

