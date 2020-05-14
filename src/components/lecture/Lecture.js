import React from 'react';
import PropTypes from 'prop-types';
import getProducts from '../../api/api'


import Item from '../item/Item';

import './Lecture.scss';

export default class Lecture extends React.Component {

  state = { data: null, loading: true, error: false }

  async componentDidMount() {
    try {
      const data = await getProducts();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching data', e);
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { data, loading, error } = this.state;
    const { url } = this.props;

    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }

    return (<div>Gögn: {JSON.stringify(data)}</div>);
  }
}
