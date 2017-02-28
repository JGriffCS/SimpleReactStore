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
        <button className="btn-primary quantity-btn decrementBtn" onClick={this.decrement.bind(this)}><i className="fa fa-minus" aria-hidden="true"></i></button>
        <input className="form-control quantityInput" ref={(el) => { this._quantity = el }} value={quantity} onChange={this.updateQuantity.bind(this)} />
        <button className="btn-primary quantity-btn incrementBtn" onClick={this.increment.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i></button>
      </div>
    )
  }
}

export default Quantity;
