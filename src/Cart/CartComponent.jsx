import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <div className="fa-stack cart-icon-container ">
          <i className="fa fa-shopping-cart fa-stack-2x" aria-hidden="true"></i>
          <strong className="fa-stack">{this.props.cart.length}</strong>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(Cart);
