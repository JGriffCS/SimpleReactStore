import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleCartVisibility } from '../actions/cart';

import CartItem from './CartItemComponent';

class Cart extends React.Component {
  toggleCart() {
    this.props.toggleCartVisibility();
  }

  getCartContent() {
    const { cart } = this.props;

    if (cart.length === 0) {
      return <div>THERE'S NO ITEMS!!!</div>;
    }

    const cartItems = [];

    for (let i = 0; i < cart.items.length; i++) {
      cartItems.push(<CartItem product={cart[i]} />)
    }

    return cartItems;
  }

  render() {
    const { cart } = this.props;
    const quantity = this.props.cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const cartContent = this.getCartContent();

    return (
      <div>
        <div className="fa-stack cart-icon-container" onClick={this.toggleCart.bind(this)}>
          <i className="fa fa-shopping-cart fa-stack-2x" aria-hidden="true"></i>
          <strong className="fa-stack unselectable">{quantity}</strong>
        </div>
        <div className={`cart-container ${cart.visible === true ? 'open' : ''}`}>
          {cartContent}
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

export default connect(mapStateToProps, dispatch => bindActionCreators({ toggleCartVisibility }, dispatch))(Cart);
