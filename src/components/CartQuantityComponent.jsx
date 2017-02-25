import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CartQuantity extends React.Component {
  render() {
    return(
      <div className="cart-quantity-container">
        <button>-</button>
        <input readOnly value={this.props.quantity} />
        <button>+</button>
      </div>
    )
  }
}

export default connect(null)(CartQuantity);
