import React from 'react';


import './Home.scss';


export default class Home extends React.Component {

  render() {
    return (
      <section className="lecture">
        <div className="lecture__content">
          <div className="lecture__row">
            <div className="lecture__col">
              <div className="container">
                <img src={process.env.PUBLIC_URL + 'img/pizza.jpg'}/>
              </div>
            </div>
          </div>
        </div>

    </section>
    );
  }
}
