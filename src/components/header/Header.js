import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.scss';

export default class Header extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
  }

  render() {
    const { title } = this.props;

    const style = {};


    return (
      <header className="heading heading--main" style={style}>
        <div className="heading__container">
          <h1 className="heading__title">
            <Link className="nav__button" to="/">{title}</Link></h1>
          <div className="heading__navigation">
            <div className="heading__nav_button"> 
              <Link className="nav__button" to="/login">Skrá inn</Link>
            </div>
            <div className="heading__nav_button">
              <Link className="nav__button" to="/">Karfa</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
