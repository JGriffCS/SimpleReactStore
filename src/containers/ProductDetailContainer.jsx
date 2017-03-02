import React from 'react';
import { connect } from 'react-redux';

import AddToCart from '../components/AddToCartComponent';
import BackButton from '../components/BackButtonComponent';

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="container product-detail-container">
        <BackButton />
        <div className="details">
          <div>
            <img src={this.props.product.imageUrl} />
          </div>
          <div className="product-info">
            <div>
              <h1>{this.props.product.name}</h1>
            </div>
            <div className="description">
              <p>{this.props.product.description}</p>
              <p><strong>${this.props.product.price.toFixed(2)}</strong></p>
            </div>
            <div>
              <AddToCart {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    product: state.products.find((product) => {
      return product.id === parseInt(ownProps.params.productId, 10);
    }),
  };
}

export default connect(mapStateToProps)(ProductDetail);
