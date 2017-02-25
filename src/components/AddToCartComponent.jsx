import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProductToCart } from '../actions/cart';

import Quantity from './QuantityComponent';

class AddToCart extends React.Component {
  constructor(props, context) {
    super(props, context);

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
    debugger;
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

  generateQuantityOptions() {
    const options = [];

    for (let i = 1; i <= 10; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }

    return options;
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
    const options = this.generateQuantityOptions();

    return(
      <div>
        {/* <select ref={(el) => { this._quantity = el }}>
          {options}
        </select> */}
        <Quantity incrementFn={this.incrementQuantity.bind(this)} decrementFn={this.decrementQuantity.bind(this)} updateFn={this.updateQuantity.bind(this)} quantity={this.state.quantity} />
        <button onClick={this.addItemToCart.bind(this)}>Add to Cart</button>
      </div>
    );
  }
}

export default connect(null, dispatch => bindActionCreators({ addProductToCart }, dispatch))(AddToCart);
