import React from 'react';
import { connect } from 'react-redux';

import Cart from '../components/CartComponent';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="cart-component-container">
          <Cart />
        </div>
        <div className="header-container"></div>
      </div>
    );
  }
}

export default connect(null)(Header);
