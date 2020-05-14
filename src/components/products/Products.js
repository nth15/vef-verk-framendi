import React from 'react';
import { getProducts } from '../../api/api'

import './Products.scss';

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

    data.forEach(item => console.log(item));
    return (
      <div className="products">
          <div className="products__row">
            <div className="products__col">
              {data.map(product => (
                <div classname="productItem" key={product.title}>
                  <div><h2>{product.title}</h2></div>
                  <div><p>{product.description}</p></div>
                  <div className="product__price"><p>{product.price} kr.</p></div>
                </div>
              ))}
            </div>
        </div>
     </div>
    );
  }
}
