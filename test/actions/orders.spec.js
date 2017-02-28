import { CREATE_NEW_ORDER } from '../../src/constants/ActionTypes';
import { createNewOrder } from '../../src/actions/orders';

describe('order actions', () => {
  it('should create an action to create a new order', () => {
    const orderId = 1;
    const items = [
      {
        productId: 4,
        name: 'Product 4',
        price: 20.00,
        thumbnailUrl: 'http://placehold.it/75/2bc601/ffffff',
        quantity: 3,
      },
      {
        productId: 6,
        name: 'Product 6',
        price: 14.99,
        thumbnailUrl: 'http://placehold.it/75/72015f/ffffff',
        quantity: 1,
      },
    ];

    const expectedAction = {
      type: CREATE_NEW_ORDER,
      orderId,
      items,
    };

    expect(createNewOrder(orderId, items)).toEqual(expectedAction);
  })
})
