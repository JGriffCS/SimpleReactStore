import React from 'react';

class CatalogItem extends React.Component {
  render() {
    return (
      <div className="catalog-item-container">
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
