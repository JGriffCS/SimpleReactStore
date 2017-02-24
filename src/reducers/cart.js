import { ADD_PRODUCT_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_PRODUCT_FROM_CART } from '../constants/ActionTypes.js';

export const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      // If the product is already in the cart, update its quantity
      if (state.findIndex((item) => item.productId === action.product.productId) !== -1) {
        return state.map((item, index) => {
          if (item.productId === action.product.productId) {
            item.quantity += action.product.quantity;
          }

          return item;
        });
      }

      // Otherwise add it to the cart
      return [
        ...state,
        action.product,
      ];
    case INCREMENT_QUANTITY:
      return state.map((item, index) => {
        if (item.productId === action.productId) {
          item.quantity += 1;
        }

        return item;
      })
    case DECREMENT_QUANTITY:
    return state.map((item, index) => {
      if (item.productId === action.productId) {
        // Only decrement if there's more than one
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }

      return item;
    })
    case REMOVE_PRODUCT_FROM_CART:
      const productIdx = state.findIndex((item) => item.productId === action.productId);
      if (productIdx !== -1) {
        return [
          ...state.slice(0, productIdx),
          ...state.slice(productIdx + 1)
        ];
      }

      return state;
    default:
      return state;
  }
}
