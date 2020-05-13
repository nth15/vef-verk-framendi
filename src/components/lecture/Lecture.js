import React from 'react';
import PropTypes from 'prop-types';


import Item from '../item/Item';

import './Lecture.scss';

export default class Lecture extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const { content } = this.props;

    return (
      <section className="lecture">
        <div className="lecture__content">
          <div className="lecture__row">
            <div className="lecture__col">
              {content.map(({ type, ...item }, i) => (
                <Item key={i} type={type} item={item} />
              ))}
            </div>
          </div>
        </div>


      </section>
    );
  }
}
