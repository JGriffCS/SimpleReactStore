import React from 'react';
import { connect } from 'react-redux';

class Quantity extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

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
        <button className="btn-primary quantity-btn decrementBtn" onClick={this.decrement}><i className="fa fa-minus" aria-hidden="true"></i></button>
        <input className="form-control quantityInput" ref={(el) => { this._quantity = el }} value={quantity} onChange={this.updateQuantity} />
        <button className="btn-primary quantity-btn incrementBtn" onClick={this.increment}><i className="fa fa-plus" aria-hidden="true"></i></button>
      </div>
    )
  }
}

export default connect(null)(Quantity);
