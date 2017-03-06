import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

import Checkout from '../../src/containers/CheckoutContainer';
import { emptyCart } from '../../src/actions/cart';
import { createNewOrder } from '../../src/actions/orders';

describe('Checkout Container', function() {
  const mockStore = configureStore();
  const fakeStore = {
    cart: {
      visible: false,
      items: [
        { productId: 1, name: 'Product 1', price: 10.50, desc: 'Fake Desc', quantity: 1, thumbnailUrl: 'http://placehold.it/75', },
        { productId: 2, name: 'Product 2', price: 9.99, desc: 'Fake Desc', quantity: 2, thumbnailUrl: 'http://placehold.it/75', },
        { productId: 3, name: 'Product 3', price: .99, desc: 'Fake Desc', quantity: 3, thumbnailUrl: 'http://placehold.it/75', },
      ],
    },
    orders: [
      {
        orderId: 123456789,
        items: [
          { productId: 4, name: 'Product 4', price: 20.00, desc: 'Fake Desc', quantity: 1, thumbnailUrl: 'http://placehold.it/75', },
          { productId: 5, name: 'Product 5', price: 49.99, desc: 'Fake Desc', quantity: 2, thumbnailUrl: 'http://placehold.it/75', },
          { productId: 6, name: 'Product 6', price: 14.99, desc: 'Fake Desc', quantity: 3, thumbnailUrl: 'http://placehold.it/75', },
          { productId: 7, name: 'Product 7', price: 11.95, desc: 'Fake Desc', quantity: 4, thumbnailUrl: 'http://placehold.it/75', },
        ],
      }
    ],
    products: [],
  };

  it('should display checkout information by default', () => {
    const wrapper = mount(
      <Provider store={mockStore(fakeStore)}>
        <Checkout location={{ query: {}, }} />
      </Provider>
    );

    expect(wrapper.find('.checkout-info').exists()).toEqual(true);
  });

  it('should display a cart item for each item in the cart', () => {
    const wrapper = mount(
      <Provider store={mockStore(fakeStore)}>
        <Checkout location={{ query: {}, }} />
      </Provider>
    );

    expect(wrapper.find('.cart-item').length).toEqual(3);
  });

  it('should show order completion information if the page is loaded with an existing order id', () => {
    const wrapper = mount(
      <Provider store={mockStore(fakeStore)}>
        <Checkout location={{ query: { orderId: 123456789, }, }} />
      </Provider>
    );

    expect(wrapper.find('.completion-info').exists()).toEqual(true);
  });

  it('should display a readonly cart item for each item in the cart once the order is complete', () => {
    const wrapper = mount(
      <Provider store={mockStore(fakeStore)}>
        <Checkout location={{ query: { orderId: 123456789, }, }} />
      </Provider>
    );

    expect(wrapper.find('.cart-item').length).toEqual(4);
    expect(wrapper.find('.readonly').length).toEqual(4);
  });
});
