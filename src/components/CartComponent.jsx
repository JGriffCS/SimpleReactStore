import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import { toggleCartVisibility } from '../actions/cart';

import CartItem from './CartItemComponent';

class Cart extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.toggleCart = this.toggleCart.bind(this);
  }
  toggleCart() {
    this.props.toggleCartVisibility();
  }

  goToCheckout() {
    hashHistory.push('/checkout');
  }

  getCartContent() {
    const { cart } = this.props;

    if (cart.items.length === 0) {
      return (
        <div className="empty-cart text-center">
          <strong>Your cart is empty!</strong>
          <div>Why not find something you like?</div>
        </div>
      );
    }

    const cartItems = [];

    for (let i = 0; i < cart.items.length; i++) {
      cartItems.push(<CartItem key={cart.items[i].productId} uniqueKey={cart.items[i].productId} product={cart.items[i]} />)
      if (i < cart.items.length - 1) {
        cartItems.push(<hr key={`hr${i}`} />);
      }
    }

    return cartItems;
  }

  getTotal() {
    return this.props.cart.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }

  render() {
    const { cart } = this.props;
    const quantity = this.props.cart.items.reduce((sum, item) => sum + item.quantity, 0);
    const cartContent = this.getCartContent();

    return (
      <div>
        <div className="fa-stack cart-icon-container" onClick={this.toggleCart}>
          <i className="fa fa-shopping-cart fa-stack-2x" aria-hidden="true"></i>
          <strong className="fa-stack unselectable">{quantity}</strong>
        </div>
        <div className={`cart-container ${cart.visible === true ? 'open' : ''}`}>
          <div className="scrollable-cart">
            {cartContent}
          </div>
          {cart.items.length > 0 ? (<div className="cart-footer">
            <span className="pull-left total-price"><strong>Total: ${this.getTotal().toFixed(2)}</strong></span>
            <span className="pull-right"><button onClick={this.goToCheckout}>Go to Checkout</button></span>
          </div>) : ''}
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
