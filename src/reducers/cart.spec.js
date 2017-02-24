import { cart } from './cart';
import { ADD_PRODUCT_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_PRODUCT_FROM_CART } from '../constants/ActionTypes';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(
      cart(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_PRODUCT_TO_CART', () => {
    expect(
      cart([], {
        type: ADD_PRODUCT_TO_CART,
        product: {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        },
      })
    ).toEqual([{
      productId: 1,
      name: 'Product 1',
      price: 10.50,
      thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
      quantity: 1,
    }])

    expect(
      cart([
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        }
      ], {
        type: ADD_PRODUCT_TO_CART,
        product: {
          productId: 3,
          name: 'Product 3',
          price: .99,
          thumbnailUrl: 'http://placehold.it/50/c66101/ffffff',
          quantity: 3,
        },
      })
    ).toEqual([
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 1,
      },
      {
        productId: 3,
        name: 'Product 3',
        price: .99,
        thumbnailUrl: 'http://placehold.it/50/c66101/ffffff',
        quantity: 3,
      }
    ])

    expect(
      cart([
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        }
      ], {
        type: ADD_PRODUCT_TO_CART,
        product: {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 4,
        },
      })
    ).toEqual([
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 5,
      },
    ])
  })

  it('should handle INCREMENT_QUANITY', () => {
    expect(
      cart([
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        }
      ], {
        type: INCREMENT_QUANTITY,
        productId: 1,
      })
    ).toEqual([
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 2,
      }
    ])
  })

  it('should handle DECREMENT_QUANTITY', () => {
    expect(
      cart([
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 3,
        }
      ], {
        type: DECREMENT_QUANTITY,
        productId: 1,
      })
    ).toEqual([
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 2,
      }
    ])
  })

  expect(
    cart([
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 1,
      }
    ], {
      type: DECREMENT_QUANTITY,
      productId: 1,
    })
  ).toEqual([
    {
      productId: 1,
      name: 'Product 1',
      price: 10.50,
      thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
      quantity: 1,
    }
  ])

  it('should handle REMOVE_PRODUCT_FROM_CART', () => {
    expect(
      cart([
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        },
        {
          productId: 3,
          name: 'Product 3',
          price: .99,
          thumbnailUrl: 'http://placehold.it/50/c66101/ffffff',
          quantity: 3,
        }
      ], {
        type: REMOVE_PRODUCT_FROM_CART,
        productId: 3,
      })
    ).toEqual([
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 1,
      },
    ])

    expect(
      cart([
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        },
      ], {
        type: REMOVE_PRODUCT_FROM_CART,
        productId: 3,
      })
    ).toEqual([
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 1,
      },
    ])
  })
})
