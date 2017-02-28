import { CREATE_NEW_ORDER } from '../constants/ActionTypes';

export function createNewOrder(orderId, items) {
  return {
    type: CREATE_NEW_ORDER,
    orderId,
    items,
  };
}
