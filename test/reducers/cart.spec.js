import { cart } from '../../src/reducers/cart';
import { TOGGLE_CART_VISIBILITY, ADD_PRODUCT_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, UPDATE_QUANTITY, REMOVE_PRODUCT_FROM_CART } from '../../src/constants/ActionTypes';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(
      cart(undefined, {})
    ).toEqual({ visible: false, items: [], })
  })

  it('should handle TOGGLE_CART_VISIBILITY', () => {
    expect(
      cart({ visible: false, items: [], }, {
        type: TOGGLE_CART_VISIBILITY,
      })
    ).toEqual({ visible: true, items: [], })

    expect(
      cart({ visible: true, items: [], }, {
        type: TOGGLE_CART_VISIBILITY,
      })
    ).toEqual({ visible: false, items: [], })

    expect(
      cart({ visible: false, items: [], }, {
        type: TOGGLE_CART_VISIBILITY,
        visibility: false,
      })
    ).toEqual({ visible: false, items: [], })
  })

  it('should handle ADD_PRODUCT_TO_CART', () => {
    expect(
      cart({ visible: false, items: []}, {
        type: ADD_PRODUCT_TO_CART,
        product: {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        },
      })
    ).toEqual({
      visible: false,
      items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        }
      ]
    })

    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        }
      ]}, {
        type: ADD_PRODUCT_TO_CART,
        product: {
          productId: 3,
          name: 'Product 3',
          price: .99,
          thumbnailUrl: 'http://placehold.it/50/c66101/ffffff',
          quantity: 3,
        },
      })
    ).toEqual({ visible: false, items: [
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
    ]})

    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        }
      ]}, {
        type: ADD_PRODUCT_TO_CART,
        product: {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 4,
        },
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 5,
      },
    ]})
  })

  it('should handle INCREMENT_QUANITY', () => {
    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        }
      ]}, {
        type: INCREMENT_QUANTITY,
        productId: 1,
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 2,
      }
    ]})
  })

  it('should handle DECREMENT_QUANTITY', () => {
    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 3,
        }
      ]}, {
        type: DECREMENT_QUANTITY,
        productId: 1,
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 2,
      }
    ]})

    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        }
      ]}, {
        type: DECREMENT_QUANTITY,
        productId: 1,
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 1,
      }
    ]})
  })



  it('should handle UPDATE_QUANTITY', () => {
    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 3,
        }
      ]}, {
        type: UPDATE_QUANTITY,
        productId: 1,
        quantity: 22,
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 22,
      }
    ]})

    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 5,
        }
      ]}, {
        type: UPDATE_QUANTITY,
        productId: 1,
        quantity: 0,
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 5,
      }
    ]})

    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 5,
        }
      ]}, {
        type: UPDATE_QUANTITY,
        productId: 1,
        quantity: 1000,
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 5,
      }
    ]})
  })

  it('should handle REMOVE_PRODUCT_FROM_CART', () => {
    expect(
      cart({ visible: false, items: [
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
      ]}, {
        type: REMOVE_PRODUCT_FROM_CART,
        productId: 3,
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 1,
      },
    ]})

    expect(
      cart({ visible: false, items: [
        {
          productId: 1,
          name: 'Product 1',
          price: 10.50,
          thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
          quantity: 1,
        },
      ]}, {
        type: REMOVE_PRODUCT_FROM_CART,
        productId: 3,
      })
    ).toEqual({ visible: false, items: [
      {
        productId: 1,
        name: 'Product 1',
        price: 10.50,
        thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
        quantity: 1,
      },
    ]})
  })
})
