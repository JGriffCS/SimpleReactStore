import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProductToCart } from '../actions/cart';

class AddToCart extends React.Component {
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
      quantity: parseInt(this._quantity.value, 10),
    };

    this.props.addProductToCart(cartItem);
  }

  render() {
    const options = this.generateQuantityOptions();

    return(
      <div>
        <select ref={(el) => { this._quantity = el }}>
          {options}
        </select>
        <button onClick={this.addItemToCart.bind(this)}>Add to Cart</button>
      </div>
    );
  }
}

export default connect(null, dispatch => bindActionCreators({ addProductToCart }, dispatch))(AddToCart);
