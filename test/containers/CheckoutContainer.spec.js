import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { Checkout } from '../../src/containers/CheckoutContainer';

describe('Checkout Container', function() {
  it('should display checkout information by default', () => {
    const wrapper = mount(<Checkout cart={{ items: [], }} />);

    expect(wrapper.find('.checkout-info').exists()).toEqual(true);
  });

  it('should hide checkout information and show order complete information when order is complete', () => {
    const wrapper = mount(<Checkout cart={{ items: [], }} />);

    wrapper.instance().setPurchaseComplete();
    const results = (!wrapper.find('.checkout-info').exists()) && wrapper.find('.completion-info').exists();
    expect(results).toEqual(true);
  })
});
