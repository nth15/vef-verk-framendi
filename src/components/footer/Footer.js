import React from 'react';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="left">
          <p>Kárastígur 69, 101 Reykjavík</p>
        </div>
        <div className="right">
          <p><a href="tel:+354-581-9696">+354-581-9696</a></p>
          <p><a href="mailto:Kaffi@kaffi.is">Kaffi kaffi</a></p>
        </div>
      </footer>
    );
  }
}
