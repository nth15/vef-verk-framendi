import React from 'react';
import getProducts from '../../api/api'


export default class Products extends React.Component {

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

    if (loading) {
      return (<div>Sæki gögn...</div>);
    }

    if (error) {
      return (<div>Villa við að sækja gögn</div>);
    }

    return (<div>Gögn: {JSON.stringify(data)}</div>);
  }
}
