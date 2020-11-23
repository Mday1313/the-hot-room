
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import Home from './pages/landing/Home';
import Events from './pages/landing/Events';
import Classes from './pages/landing/Classes';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
// import Dashboard from './components/dashboard/index'
// REDUX
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => 
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={ Home } />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/events" component={ Events } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            {/* <Route exact path="/dashboard" component={ Dashboard } /> */}
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  </Provider>

export default App;
