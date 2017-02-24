import { TOGGLE_CART_VISIBILITY, ADD_PRODUCT_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_PRODUCT_FROM_CART } from '../constants/ActionTypes';

export function toggleCartVisibility(visibility) {
  return {
    type: TOGGLE_CART_VISIBILITY,
    visibility,
  };
}

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  };
}

export function incrementQuantity(productId) {
  return {
    type: INCREMENT_QUANTITY,
    productId,
  };
}

export function decrementQuantity(productId) {
  return {
    type: DECREMENT_QUANTITY,
    productId,
  };
}

export function removeProductFromCart(productId) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    productId,
  };
}
