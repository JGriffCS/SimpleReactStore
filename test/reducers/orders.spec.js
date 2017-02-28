import { orders } from '../../src/reducers/orders';
import { CREATE_NEW_ORDER } from '../../src/constants/ActionTypes';

describe('orders reducer', () => {
  it('should return the initial state', () => {
    expect(
      orders(undefined, {})
    ).toEqual([]);
  });

  it('should not add an order without an id', () => {
    expect(
      orders([], {
        type: CREATE_NEW_ORDER,
        items: [{
          productId: 4,
          name: 'Product 4',
          price: 20.00,
          thumbnailUrl: 'http://placehold.it/75/2bc601/ffffff',
          quantity: 3,
        }],
      })
    ).toEqual([]);
  });

  it('should not add an order without any items', () => {
    expect(
      orders([], {
        type: CREATE_NEW_ORDER,
        orderId: 1,
      })
    ).toEqual([]);
  });

  it('should add a new order when passed an id and one or more items', () => {
    expect(
      orders([], {
        type: CREATE_NEW_ORDER,
        orderId: 1,
        items: [{
          productId: 4,
          name: 'Product 4',
          price: 20.00,
          thumbnailUrl: 'http://placehold.it/75/2bc601/ffffff',
          quantity: 3,
        }]
      })
    ).toEqual([{
      orderId: 1,
      items: [{
        productId: 4,
        name: 'Product 4',
        price: 20.00,
        thumbnailUrl: 'http://placehold.it/75/2bc601/ffffff',
        quantity: 3,
      }],
    }]);
  });

  it('should add new orders to the front of the order list', () => {
    expect(
      orders([{
        orderId: 1,
        items: [{
          productId: 4,
          name: 'Product 4',
          price: 20.00,
          thumbnailUrl: 'http://placehold.it/75/2bc601/ffffff',
          quantity: 3,
        }]}], {
        type: CREATE_NEW_ORDER,
        orderId: 2,
        items: [{
          productId: 6,
          name: 'Product 6',
          price: 14.99,
          thumbnailUrl: 'http://placehold.it/75/72015f/ffffff',
          quantity: 2,
        }]
      })
    ).toEqual([
      {
        orderId: 2,
        items: [{
          productId: 6,
          name: 'Product 6',
          price: 14.99,
          thumbnailUrl: 'http://placehold.it/75/72015f/ffffff',
          quantity: 2,
        }],
      },
      {
        orderId: 1,
        items: [{
          productId: 4,
          name: 'Product 4',
          price: 20.00,
          thumbnailUrl: 'http://placehold.it/75/2bc601/ffffff',
          quantity: 3,
        }],
      }
    ]);
  });
});
