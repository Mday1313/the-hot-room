
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './pages/landing/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => 
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={ Home } />
        <section className="container">
          <Switch>
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
          </Switch>
        </section>
        
      </Fragment>
    </Router>


export default App;
