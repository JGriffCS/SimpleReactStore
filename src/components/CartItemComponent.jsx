import React from 'react';

import CartQuantity from './CartQuantityComponent';

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
          <div className="item-remove">
            <i className="fa fa-trash pull-right" aria-hidden="true"></i>
          </div>
          <div className="spacer15"></div>
          <div className="item-quantity">
            <CartQuantity quantity={product.quantity} />
          </div>
          <div className="item-price">
            <span className="pull-right">${parseFloat(product.price).toFixed(2)}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;
