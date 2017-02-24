import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    const quantity = this.props.cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
      <div>
        <div className="fa-stack cart-icon-container ">
          <i className="fa fa-shopping-cart fa-stack-2x" aria-hidden="true"></i>
          <strong className="fa-stack">{quantity}</strong>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Cart);
