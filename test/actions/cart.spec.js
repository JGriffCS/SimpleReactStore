import { TOGGLE_CART_VISIBILITY, ADD_PRODUCT_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, UPDATE_QUANTITY, REMOVE_PRODUCT_FROM_CART } from '../../src/constants/ActionTypes';
import { toggleCartVisibility, addProductToCart, incrementQuantity, decrementQuantity, updateQuantity, removeProductFromCart } from '../../src/actions/cart';

describe('cart actions', () => {
  it('should create an action to toggle visibility of the cart', () => {
    const expectedAction = {
      type: TOGGLE_CART_VISIBILITY,
    };

    expect(toggleCartVisibility()).toEqual(expectedAction);
  })

  it('should create an action to add a product to the cart', () => {
    const product = {
      productId: 1,
      name: 'Product 1',
      price: 10.50,
      thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
      quantity: 1,
    };

    const expectedAction = {
      type: ADD_PRODUCT_TO_CART,
      product,
    };

    expect(addProductToCart(product)).toEqual(expectedAction);
  })

  it('should create an action to increment quantity', () => {
    const productId = 3;

    const expectedAction = {
      type: INCREMENT_QUANTITY,
      productId,
    };

    expect(incrementQuantity(productId)).toEqual(expectedAction);
  })

  it('should create an action to decrement quantity', () => {
    const productId = 3;

    const expectedAction = {
      type: DECREMENT_QUANTITY,
      productId,
    };

    expect(decrementQuantity(productId)).toEqual(expectedAction);
  })

  it('should create an action to update quantity', () => {
    const productId = 3,
          quantity = 2;

    const expectedAction = {
      type: UPDATE_QUANTITY,
      productId,
      quantity,
    };

    expect(updateQuantity(productId, quantity)).toEqual(expectedAction);
  })

  it('should create an action to remove a product from the cart', () => {
    const productId = 1;

    const expectedAction = {
      type: REMOVE_PRODUCT_FROM_CART,
      productId,
    };

    expect(removeProductFromCart(productId)).toEqual(expectedAction);
  })
})
