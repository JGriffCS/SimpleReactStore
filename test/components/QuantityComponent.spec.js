import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

import QuantityComponent from '../../src/components/QuantityComponent';

describe('Quantity Component', function() {
  const mockStore = configureStore();

  it('simulates increment and decrement callbacks on click event', () => {
    const decrementQuantity = sinon.spy();
    const incrementQuantity = sinon.spy();

    const qtyComponent = mount(
      <Provider store={mockStore()}>
        <QuantityComponent decrementFn={decrementQuantity} incrementFn={incrementQuantity} />
      </Provider>
    );

    qtyComponent.find('.decrementBtn').simulate('click');
    expect(decrementQuantity.calledOnce).toEqual(true);

    qtyComponent.find('.incrementBtn').simulate('click');
    expect(incrementQuantity.calledOnce).toEqual(true);
  });

  it('simulates update callback on input change event', () => {
    const updateQuantity = sinon.spy();

    const qtyComponent = mount(
      <Provider store={mockStore()}>
        <QuantityComponent updateFn={updateQuantity} />
      </Provider>
    );

    qtyComponent.find('.quantityInput').node.value = 4;
    qtyComponent.find('.quantityInput').simulate('change', qtyComponent.find('.quantityInput'));

    expect(updateQuantity.calledOnce).toEqual(true);
    expect(updateQuantity.calledWith(4)).toEqual(true);
  });
});
