import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import QuantityComponent from '../../src/components/QuantityComponent';

describe('Quantity Component', function() {
  it('simulates increment and decrement callbacks on click event', () => {
    const decrementQuantity = sinon.spy();
    const incrementQuantity = sinon.spy();

    const qtyComponent = shallow(
      <QuantityComponent decrementFn={decrementQuantity} incrementFn={incrementQuantity} />
    );

    qtyComponent.find('.decrementBtn').simulate('click');
    expect(decrementQuantity.calledOnce).toEqual(true);

    qtyComponent.find('.incrementBtn').simulate('click');
    expect(incrementQuantity.calledOnce).toEqual(true);
  });

  it('simulates update callback on input change event', () => {
    const updateQuantity = sinon.spy();

    const qtyComponent = mount(
      <QuantityComponent updateFn={updateQuantity} />
    );

    qtyComponent.find('.quantityInput').node.value = 4;
    qtyComponent.find('.quantityInput').simulate('change', qtyComponent.find('.quantityInput'));

    expect(updateQuantity.calledOnce).toEqual(true);
    expect(updateQuantity.calledWith(4)).toEqual(true);
  })
});
