import { createSelector } from 'reselect';

export const ProductSelector = createSelector(
  state => state.products,
  (state, props) => props.params.productId,
  (products, id) => {
    return { product: products.find(product => product.id === parseInt(id, 10)), };
  }
);
