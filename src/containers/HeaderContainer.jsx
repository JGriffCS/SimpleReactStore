import React from 'react';
import { connect } from 'react-redux';

import Cart from '../components/CartComponent.jsx';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="pull-right">
          <Cart />
        </div>
      </div>
    );
  }
}

export default connect()(Header);
