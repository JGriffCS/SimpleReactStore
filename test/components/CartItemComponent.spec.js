import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CartItemComponent from '../../src/components/CartItemComponent';

describe('Cart Item Component', function() {
  const mockStore = configureStore();
  const product = {
    productId: 1,
    name: 'Product 1',
    price: 10.50,
    thumbnailUrl: 'http://placehold.it/50/032c6d/ffffff',
    quantity: 1,
  };

  it('should have a quantity selector and remove button by default', () => {
    const wrapper = mount(
      <Provider store={mockStore({ cart: { items: [], }, })}>
        <CartItemComponent product={product} />
      </Provider>
    );

    expect(wrapper.find('.cart-quantity-container').exists()).toEqual(true);
    expect(wrapper.find('.fa-trash').exists()).toEqual(true);
  });

  it('should swap out the quantity component with plain text and hide the remove button if readonly is true', () => {
    const wrapper = mount(
      <Provider store={mockStore({ cart: { items: [], }, })}>
        <CartItemComponent readonly="true" product={product} />
      </Provider>
    );

    expect(wrapper.find('.readonly').exists()).toEqual(true);
    expect(wrapper.find('.fa-trash').exists()).toEqual(false);
  });
});
