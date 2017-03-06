import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementQuantity, decrementQuantity, updateQuantity, removeProductFromCart } from '../actions/cart';

import Quantity from './QuantityComponent';

class CartItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  incrementQuantity() {
    this.props.incrementQuantity(this.props.product.productId);
  }

  decrementQuantity() {
    this.props.decrementQuantity(this.props.product.productId);
  }

  updateQuantity(qty) {
    this.props.updateQuantity(this.props.product.productId, qty);
  }

  removeItem() {
    this.props.removeProductFromCart(this.props.product.productId);
  }

  render() {
    const { product } = this.props;

    return(
      <div className="cart-item">
        <div className="item-thumbnail">
          <img src={product.thumbnailUrl} />
        </div>
        <div className="item-details">
          <div className="item-name">
            {product.name}
          </div>
          {this.props.readonly !== 'true' ? (
            <div className="item-remove">
              <i className="fa fa-trash pull-right" aria-hidden="true" onClick={this.removeItem}></i>
            </div>
          ) : ''}
          <div className="item-quantity">
            {this.props.readonly !== 'true' ? (
              <Quantity incrementFn={this.incrementQuantity} decrementFn={this.decrementQuantity} updateFn={this.updateQuantity} quantity={product.quantity} />
            ) : <div className="readonly">Quantity : {product.quantity}</div>}
          </div>
          <div className="item-price">
            <span className="pull-right">${parseFloat(product.price).toFixed(2)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, dispatch => bindActionCreators({ incrementQuantity, decrementQuantity, updateQuantity, removeProductFromCart }, dispatch))(CartItem);
