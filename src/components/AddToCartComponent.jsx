import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProductToCart } from '../actions/cart';

import Quantity from './QuantityComponent';

class AddToCart extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuanity = this.decrementQuantity.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  incrementQuantity() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  decrementQuantity() {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  }

  updateQuantity(qty) {
    if (qty > 0 && qty < 1000) {
      this.setState({
        quantity: qty,
      });
    }
  }

  addItemToCart() {
    const { product } = this.props;
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      thumbnailUrl: product.thumbnailUrl,
      quantity: this.state.quantity,
    };

    this.props.addProductToCart(cartItem);
  }

  render() {
    return (
      <div className="add-to-cart">
        <Quantity incrementFn={this.incrementQuantity} decrementFn={this.decrementQuantity} updateFn={this.updateQuantity} quantity={this.state.quantity} />
        <button onClick={this.addItemToCart}>Add to Cart</button>
      </div>
    );
  }
}

export default connect(null, dispatch => bindActionCreators({ addProductToCart }, dispatch))(AddToCart);
