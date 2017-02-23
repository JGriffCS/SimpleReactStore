import React from 'react';
import { hashHistory } from 'react-router';

class CatalogItem extends React.Component {
  goToDetail() {
    hashHistory.push(`/detail/${this.props.product.id}`);
  }

  render() {
    return (
      <div className="catalog-item-container" onClick={this.goToDetail.bind(this)}>
        <img src={this.props.product.thumbnailUrl} />
        <div>
          <span>{this.props.product.name}</span>
          <span className="pull-right">${this.props.product.price.toFixed(2)}</span>
        </div>
      </div>
    )
  }
}

export default CatalogItem;
