
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/landing/Home';
import Events from './pages/landing/Events';
import Team from './pages/landing/Team';
import Pricing from './pages/landing/Pricing';
import FullClasses from './pages/landing/Classes';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './pages/dashboard/Dashboard';
// REDUX
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => 
  <Provider store={store}>
    <Router>
      <Fragment>
       
        <Route exact path="/" component={ Home } />
        <section className="mainContainer">
          <Alert />
          <Switch>
            <Route exact path="/classes" component={ FullClasses } />
            <Route exact path="/events" component={ Events } />
            <Route exact path="/team" component={ Team } />
            <Route exact path="/pricing" component={ Pricing } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/dashboard" component={ Dashboard } />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  </Provider>

export default App;
