import React from 'react';
import { connect } from 'react-redux';

import Cart from '../components/CartComponent';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="pull-right cart-component-container">
          <Cart />
        </div>
      </div>
    );
  }
}

export default connect(null)(Header);
