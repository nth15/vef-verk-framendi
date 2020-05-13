import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import HomePage from '../../components/home/Home';

export default class Home extends Component {

  state = {
    lectures: getLectureList(),
  }

  render() {
    const { lectures } = this.state;

    return (
      <React.Fragment>
        <Header category="Heim" title="Kaffi Kaffi" />
        <HomePage/>
        <Footer/>
      </React.Fragment>
    );
  }
}
