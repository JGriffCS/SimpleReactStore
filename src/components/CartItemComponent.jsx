import React from 'react';

class CartItem extends React.Component {
  render() {
    const { product } = this.props;

    return(
      <div>
        <div>
          <img src={product.thumbnailUrl} />
        </div>
        <div>
          {product.name}
        </div>
        <div>
          {product.quantity}
        </div>
        <div>
          {product.price}
        </div>
      </div>
    )
  }
}

export default CartItem;
