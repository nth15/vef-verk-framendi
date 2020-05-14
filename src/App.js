import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/home/Home';
import NotFound from './routes/not-found/NotFound';
import LoginRegister from './routes/loginRegister/LoginRegister';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet defaultTitle="Kaffi Kaffi" titleTemplate="%s – Kaffi Kaffi" />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" exact component={LoginRegister} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
