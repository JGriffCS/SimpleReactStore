import React from 'react';

class Quantity extends React.Component {
  increment() {
    this.props.incrementFn();
  }

  decrement() {
    this.props.decrementFn();
  }

  updateQuantity() {
    this.props.updateFn(parseInt(this._quantity.value, 10));
  }

  render() {
    const { quantity } = this.props;

    return(
      <div className="cart-quantity-container">
        <button className="decrementBtn" onClick={this.decrement.bind(this)}>-</button>
        <input className="quantityInput" ref={(el) => { this._quantity = el }} value={quantity} onChange={this.updateQuantity.bind(this)} />
        <button className="incrementBtn" onClick={this.increment.bind(this)}>+</button>
      </div>
    )
  }
}

export default Quantity;
