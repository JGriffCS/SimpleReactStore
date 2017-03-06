import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProductToCart } from '../actions/cart';

import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;

import AddToCart from '../components/AddToCartComponent';
import BackButton from '../components/BackButtonComponent';

import { ProductSelector as mapStateToProps } from '../selectors/product.js';

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="container product-detail-container">
        <BackButton />
        <div className="details">
          <div>
            <img src={this.props.product.imageUrl} />
          </div>
          <div className="product-info fieldset text-center">
            <div>
              <h1>{this.props.product.name}</h1>
            </div>
            <div className="description">
              <p>{this.props.product.description}</p>
              <p><strong>${this.props.product.price.toFixed(2)}</strong></p>
            </div>
            <div>
              <AddToCart product={this.props.product} addItemFn={this.props.addProductToCart} notifyFn={this.props.notifSend} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, dispatch => bindActionCreators({ addProductToCart, notifSend }, dispatch))(ProductDetail);
