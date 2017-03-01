import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { Checkout } from '../../src/containers/CheckoutContainer';
import { emptyCart } from '../../src/actions/cart';
import { createNewOrder } from '../../src/actions/orders';

describe('Checkout Container', function() {
  it('should display checkout information by default', () => {
    const wrapper = mount(<Checkout cart={{ items: [], }} orders={[]} location={{ query: {}, }} />);

    expect(wrapper.find('.checkout-info').exists()).toEqual(true);
  });

  it('should hide checkout information and show order complete information when order is completed', () => {
    const wrapper = mount(<Checkout cart={{ items: [], }} orders={[]}  location={{ query: {}, }} createNewOrder={createNewOrder} emptyCart={emptyCart} />);

    wrapper.instance().setPurchaseComplete();
    const results = (!wrapper.find('.checkout-info').exists()) && wrapper.find('.completion-info').exists();
    expect(results).toEqual(true);
  });

  it('should show order completion information if the page is loaded with an existing order id', () => {
    const wrapper = mount(<Checkout cart={{ items: [], }} orders={[]} location={{ query: { orderId: 1 }, }} />);

    expect(wrapper.find('.completion-info').exists()).toEqual(true);
  });
});
