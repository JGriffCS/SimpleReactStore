import React from 'react';

class CartItem extends React.Component {
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
          <div>
            {product.quantity}
          </div>
          <div>
            {product.price}
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;
