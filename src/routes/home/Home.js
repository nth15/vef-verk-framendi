import React, { Component } from 'react';


import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import Products from '../../components/products/Products';

export default class Home extends Component {

  render() {

    return (
      <React.Fragment>
        <Header category="Heim" title="Kaffi Kaffi" />
        <Products/>
        <Footer/>
      </React.Fragment>
    );
  }
}
