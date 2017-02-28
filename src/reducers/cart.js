import { TOGGLE_CART_VISIBILITY, SET_CART_VISIBILITY, ADD_PRODUCT_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, UPDATE_QUANTITY, REMOVE_PRODUCT_FROM_CART } from '../constants/ActionTypes';

export const cart = (state = { visible: false, items: [], }, action) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY:
      return Object.assign({}, state, {
        visible: !state.visible,
      });
    case SET_CART_VISIBILITY:
      if (typeof action.visibility !== 'undefined') {
        return Object.assign({}, state, {
            visible: action.visibility,
          });
      }

      return state;
    case ADD_PRODUCT_TO_CART:
      // If the product is already in the cart, update its quantity
      if (state.items.findIndex((item) => item.productId === action.product.productId) !== -1) {
        return Object.assign({}, state, {
          items: state.items.map((item, index) => {
                  if (item.productId === action.product.productId) {
                    item.quantity += action.product.quantity;
                  }

                  return item;
                }),
        });
      }

      // Otherwise add it to the cart
      return Object.assign({}, state, {
        items: [
          ...state.items,
          action.product,
        ],
      });
    case INCREMENT_QUANTITY:
      return Object.assign({}, state, {
        items: state.items.map((item, index) => {
                if (item.productId === action.productId) {
                  item.quantity += 1;
                }

                return item;
              }),
        })
    case DECREMENT_QUANTITY:
      return Object.assign({}, state, {
        items: state.items.map((item, index) => {
                if (item.productId === action.productId) {
                  if (item.quantity > 1) {
                    item.quantity -= 1;
                  }
                }

                return item;
              }),
        })
    case UPDATE_QUANTITY:
      return Object.assign({}, state, {
        items: state.items.map((item, index) => {
                if (item.productId === action.productId) {
                  if (action.quantity > 0 && action.quantity < 1000) {
                    item.quantity = action.quantity;
                  }
                }

                return item;
              })
      })
    case REMOVE_PRODUCT_FROM_CART:
      const productIdx = state.items.findIndex((item) => item.productId === action.productId);
      if (productIdx !== -1) {
        return Object.assign({}, state, {
          items: [
            ...state.items.slice(0, productIdx),
            ...state.items.slice(productIdx + 1)
          ],
        })
      }

      return state;
    default:
      return state;
  }
}
