import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementQuantity, decrementQuantity, updateQuantity, removeProductFromCart } from '../actions/cart';

import Quantity from './QuantityComponent';

class CartItem extends React.Component {
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
          <div className="item-remove">
            <i className="fa fa-trash pull-right" aria-hidden="true" onClick={this.removeItem.bind(this)}></i>
          </div>
          <div className="item-quantity">
            <Quantity incrementFn={this.incrementQuantity.bind(this)} decrementFn={this.decrementQuantity.bind(this)} updateFn={this.updateQuantity.bind(this)} quantity={product.quantity} />
          </div>
          <div className="item-price">
            <span className="pull-right">${parseFloat(product.price).toFixed(2)}</span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps, dispatch => bindActionCreators({ incrementQuantity, decrementQuantity, updateQuantity, removeProductFromCart }, dispatch))(CartItem);
