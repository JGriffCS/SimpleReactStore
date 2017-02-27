import React from 'react';
import { connect } from 'react-redux';

import BackButton from '../components/BackButtonComponent';
import CartItem from '../components/CartItemComponent';
import CheckoutInfo from '../components/CheckoutInfoComponent';
import OrderComplete from '../components/OrderCompleteComponent';

export class Checkout extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      purchaseComplete: false,
    };
  }

  getCartItems() {
    const { cart } = this.props;
    const cartItems = [];

    for (let i = 0; i < cart.items.length; i++) {
      cartItems.push(<CartItem key={cart.items[i].productId} product={cart.items[i]} />)
      if (i < cart.items.length - 1) {
        cartItems.push(<hr />);
      }
    }

    return cartItems;
  }

  getSubtotal() {
    return this.props.cart.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }

  setPurchaseComplete() {
    this.setState({
      purchaseComplete: true,
    });
  }

  render() {
    const cartItems = this.getCartItems();
    const thing = this.state.purchaseComplete ? <OrderComplete /> : <CheckoutInfo onSuccess={this.setPurchaseComplete.bind(this)}/>;

    return (
      <div className="checkout-container">
        <BackButton />
        <div className="checkout-details">
          <div className="cart-overview">
            <div className="title">Your Cart</div>
            <div className="cart-content">
              {cartItems}
            </div>
            <div className="cart-footer">
              <span className="pull-right">Subtotal: ${this.getSubtotal()}</span>
            </div>
          </div>
          <div className="checkout-spacer"></div>
          <div className="customer-info">
            {thing}
          </div>
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

export default connect(mapStateToProps)(Checkout);
