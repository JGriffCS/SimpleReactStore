import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

import { Checkout } from '../../src/containers/CheckoutContainer';
import { emptyCart } from '../../src/actions/cart';
import { createNewOrder } from '../../src/actions/orders';

describe('Checkout Container', function() {
  const mockStore = configureStore();

  it('should display checkout information by default', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <Checkout cart={{ items: [], }} orders={[]} location={{ query: {}, }} />
      </Provider>
    );

    expect(wrapper.find('.checkout-info').exists()).toEqual(true);
  });

  it('should show order completion information if the page is loaded with an existing order id', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <Checkout cart={{ items: [], }} orders={[]} location={{ query: { orderId: 1 }, }} />
      </Provider>
    );

    expect(wrapper.find('.completion-info').exists()).toEqual(true);
  });
});
