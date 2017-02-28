import { cart } from '../../src/reducers/cart';
import { TOGGLE_CART_VISIBILITY, SET_CART_VISIBILITY, ADD_PRODUCT_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, UPDATE_QUANTITY, REMOVE_PRODUCT_FROM_CART, EMPTY_CART } from '../../src/constants/ActionTypes';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(
      cart(undefined, {})
    ).toEqual({ visible: false, items: [], });
  })

  it('should toggle the visibility of the cart', () => {
    expect(
      cart({ visible: false, items: [], }, {
        type: TOGGLE_CART_VISIBILITY,
      })
    ).toEqual({ visible: true, items: [], });

    expect(
      cart({ visible: true, items: [], }, {
        type: TOGGLE_CART_VISIBILITY,
      })
    ).toEqual({ visible: false, items: [], });
  });

  it('should set the visibility of the cart when a state is provided', () => {
    expect(
      cart({ visible: true, items: [], }, {
        type: SET_CART_VISIBILITY,
        visibility: false,
      })
    ).toEqual({ visible: false, items: [], });
  });

  it('should add a new product to an empty cart', () => {
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
    });
  });

  it('should add a new product to a cart with other items', () => {
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
    ]});
  });

  it('should increment the quantity if an item that is already in the cart is added again', () => {
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
  });

  it('should increment the quantity of an existing item in the cart', () => {
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
    ]});
  });

  it('should handle decrement the quantity of an existing item in the cart', () => {
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
    ]});
  });

  it('should prevent the quantity of an item from going below 0 on decrement', () => {
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
    ]});
  });

  it('should set the quantity of an existing item in the cart', () => {
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
    ]});
  });

  it('should prevent the quantity of an item from being set to below 0', () => {
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
    ]});
  });

  it('should prevent the quantity of an item from being set to above 999', () => {
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
  });

  it('should remove an item from the cart', () => {
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
    ]});
  });

  it('should return the current cart if no item was found to remove', () => {
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
    ]});
  });

  it('should empty the cart of all contents', () => {
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
        },
      ]}, {
        type: EMPTY_CART,
      })
    ).toEqual({ visible: false, items: [], });
  });
})
