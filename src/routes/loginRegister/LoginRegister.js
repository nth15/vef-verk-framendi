import React, { Component } from 'react';


import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import Login from '../../components/login/Login';

export default class Home extends Component {



  render() {

    return (
      <React.Fragment>
        <Header category="Heim" title="Kaffi Kaffi" />
        <Login/>
        <Footer/>
      </React.Fragment>
    );
  }
}
