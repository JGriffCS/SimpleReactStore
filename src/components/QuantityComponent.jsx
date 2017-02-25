import React from 'react';

class Quantity extends React.Component {
  increment() {
    this.props.incrementFn();
  }

  decrement() {
    this.props.decrementFn();
  }

  updateQuantity() {
    this.props.updateFn(parseInt(this._quantity.value,10));
  }

  render() {
    const { quantity } = this.props;

    return(
      <div className="cart-quantity-container">
        <button onClick={this.decrement.bind(this)}>-</button>
        <input ref={(el) => { this._quantity = el }} value={quantity} onChange={this.updateQuantity.bind(this)} />
        <button onClick={this.increment.bind(this)}>+</button>
      </div>
    )
  }
}

export default Quantity;
