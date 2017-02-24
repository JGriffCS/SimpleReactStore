import React from 'react';
import { connect } from 'react-redux';

import CatalogItem from '../components/CatalogItemComponent';

class Catalog extends React.Component {
  render() {
    return (
      <div className="catalog-container">
        {this.props.products.map((product, idx) => {
          return (
            <CatalogItem key={idx} product={product} />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps)(Catalog);
