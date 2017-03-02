import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

class CatalogItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.goToDetail = this.goToDetail.bind(this);
  }
  
  goToDetail() {
    hashHistory.push(`/detail/${this.props.product.id}`);
  }

  render() {
    return (
      <div className="catalog-item-container col-xs-3" onClick={this.goToDetail}>
        <div className="image-container"><img src={this.props.product.smallImageUrl} className="catalog-item-image" /></div>
        <div className="product-label">
          <span>{this.props.product.name}</span>
          <span className="pull-right">${this.props.product.price.toFixed(2)}</span>
        </div>
      </div>
    )
  }
}

export default connect(null)(CatalogItem);
