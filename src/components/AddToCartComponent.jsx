import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import Quantity from './QuantityComponent';

export class AddToCart extends React.Component {
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

    this.props.addItemFn(cartItem);
    this.props.notifyFn({ message: `${this.state.quantity} item(s) added to the cart`, kind: 'success', dismissAfter: 2500, });
    hashHistory.push('/catalog');
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

export default connect(null)(AddToCart);
