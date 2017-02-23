import React from 'react';
import { browserHistory } from 'react-router';

class CatalogItem extends React.Component {
  goToDetail() {
    browserHistory.push(`/detail/${this.props.product.id}`);
  }

  render() {
    return (
      <div className="catalog-item-container" onClick={this.goToDetail.bind(this)}>
        <img src={this.props.product.imageUrl} />
        <div>
          <span>{this.props.product.name}</span>
          <span className="pull-right">${this.props.product.price.toFixed(2)}</span>
        </div>
      </div>
    )
  }
}

export default CatalogItem;
