import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CartComponent from '../../src/components/CartComponent';

describe('Cart Component', function() {
  const mockStore = configureStore();

  it('should display a message when there are no items in the cart', () => {
    const wrapper = mount(
      <Provider store={mockStore({ cart: { items: [], }, })}>
        <CartComponent />
      </Provider>
    );

    expect(wrapper.find('.empty-cart').exists()).toEqual(true);
  });

  it('should have a row for each item in the cart', () => {
    const cartItems = [
      { productId: 1, },
      { productId: 2, },
    ];
    const wrapper = mount(
      <Provider store={mockStore({ cart: { items: cartItems, }, })}>
        <CartComponent />
      </Provider>
    );
    
    expect(wrapper.find('.cart-item').length).toEqual(2);
  });
});
