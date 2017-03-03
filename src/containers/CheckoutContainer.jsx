import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

import BackButton from '../components/BackButtonComponent';
import CartItem from '../components/CartItemComponent';
import CheckoutInfo from '../components/CheckoutInfoComponent';
import OrderComplete from '../components/OrderCompleteComponent';

import { emptyCart } from '../actions/cart';
import { createNewOrder } from '../actions/orders';

export class Checkout extends React.Component {
  constructor(props, context) {
    super(props, context);

    if(this.props.location.query.orderId) {
      this.state = {
        purchaseComplete: true,
      };
    } else {
      this.state = {
        purchaseComplete: false,
      };
    }
  }

  getCartItems() {
    if (this.state.purchaseComplete === true && this.props.orders.length > 0) {
       const { orders } = this.props;
       const currentOrderIdx = orders.findIndex((order) => parseInt(this.props.location.query.orderId, 10) === order.orderId);
       const orderItems = [];

       if (currentOrderIdx > -1) {
         for (let i = 0; i < orders[currentOrderIdx].items.length; i++) {
           orderItems.push(<CartItem key={orders[currentOrderIdx].items[i].productId} product={orders[currentOrderIdx].items[i]} readonly="true"/>);
           if (i < orders[currentOrderIdx].items.length - 1) {
             orderItems.push(<hr key={`hr${i}`} />);
           }
         }
       }

       return orderItems;
    } else {
      const { cart } = this.props;
      const cartItems = [];

      for (let i = 0; i < cart.items.length; i++) {
        cartItems.push(<CartItem key={cart.items[i].productId} product={cart.items[i]} />)
        if (i < cart.items.length - 1) {
          cartItems.push(<hr key={`hr${i}`} />);
        }
      }

      return cartItems;
    }
  }

  getSubtotal() {
    return this.props.cart.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  }

  setPurchaseComplete() {
    const orderId = (new Date()).getTime();

    this.props.createNewOrder(orderId, this.props.cart.items);
    this.props.emptyCart();

    hashHistory.push(`/checkout?orderId=${orderId}`);
    this.setState({
      purchaseComplete: true,
    });
  }

  render() {
    const cartItems = this.getCartItems();
    const thing = this.state.purchaseComplete ? <OrderComplete orderId={this.props.location.query.orderId} /> : <CheckoutInfo onSuccess={this.setPurchaseComplete.bind(this)}/>;

    return (
      <div className="container checkout-container">
        <BackButton />
        <div className="checkout-details">
          <div className="cart-overview fieldset col-xs-4">
            <div className="section-header text-center">{this.state.purchaseComplete ? 'Your Order' : 'Your Cart'}</div>
            <div className="cart-content">
              {cartItems}
            </div>
            <div className="cart-footer">
              <span className="pull-right total-price"><strong>Total: ${this.getSubtotal().toFixed(2)}</strong></span>
            </div>
          </div>
          <div className="customer-info fieldset col-xs-offset-1 col-xs-7">
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
    orders: state.orders,
  };
}

export default connect(mapStateToProps, dispatch => bindActionCreators({ emptyCart, createNewOrder }, dispatch))(Checkout);
