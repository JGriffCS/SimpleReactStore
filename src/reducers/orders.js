import { CREATE_NEW_ORDER } from '../constants/ActionTypes';

export const orders = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      if (action.orderId && action.items && action.items.length > 0) {
        const newOrder = {
          orderId: action.orderId,
          items: action.items,
        };

        return [
          newOrder,
          ...state,
        ]
      }

      return state;
    default:
      return state;
  }
}
