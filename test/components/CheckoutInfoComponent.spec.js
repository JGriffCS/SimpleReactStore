import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

import { CheckoutInfo } from '../../src/components/CheckoutInfoComponent';

const initialFormValues = {
    shippingAddress: {
      firstName: 'Josh',
      lastName: 'Griffiths',
      address1: '535 Preston Woods Tr',
      address2: '',
      city: 'Atlanta',
      state: 'GA',
      zip: '30318',
      country: 'United States',
      phone: '+1 912 547 0651',
    },
    paymentInfo: {
      cardNumber: '1234123412341234',
      cardholderName: 'Josh Griffiths',
      expirationMonth: '08',
      expirationYear: '2020',
    },
    billingAddress: {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
    },
};

// TODO: Known warning with react-redux-form unknown prop: https://github.com/davidkpiano/react-redux-form/issues/623
describe('Checkout Info Component (unwrapped)', function() {
  let submitCallback = null;
  let submitFailureCallback = null;
  let toggleBillingAddressCallback = null;
  const mockStore = configureStore();

  beforeEach(() => {
    submitCallback = sinon.spy(CheckoutInfo.prototype, 'handleSubmit');
    submitFailureCallback = sinon.spy(CheckoutInfo.prototype, 'handleSubmitFailure');
  });

  afterEach(() => {
    CheckoutInfo.prototype.handleSubmit.restore();
    CheckoutInfo.prototype.handleSubmitFailure.restore();
  });

  it('should call the submission failure callback when required fields are not present', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <CheckoutInfo />
      </Provider>
    );

    wrapper.find('[type="submit"]').get(0).click();
    expect(submitFailureCallback.calledOnce).toEqual(true);
  });

  it('should call the submission callback when required fields are present', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <CheckoutInfo initialValues={initialFormValues} />
      </Provider>
    );

    wrapper.find('[type="submit"]').get(0).click();
    expect(submitCallback.calledOnce).toEqual(true);
  });

  it('should fail to submit if useBillingAddress is true and required billing address fields are missing', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <CheckoutInfo initialValues={initialFormValues} />
      </Provider>
    );

    wrapper.find('.billing-address-toggle').simulate('click');
    wrapper.find('[type="submit"]').get(0).click();
    expect(submitFailureCallback.calledOnce).toEqual(true);
  });

  it('should call the submission callback if useBillingAddress is true and required billing address fields are present', () => {
    const initialValues = Object.assign({}, initialFormValues, {
      billingAddress: {
        firstName: 'Josh',
        lastName: 'Griffiths',
        address1: 'Billing Address',
        address2: '',
        city: 'Atlanta',
        state: 'GA',
        zip: '30338',
        country: 'United States',
        phone: '9125470651',
      },
    })
    const wrapper = mount(
      <Provider store={mockStore()}>
        <CheckoutInfo initialValues={initialValues} />
      </Provider>
    );

    wrapper.find('.billing-address-toggle').simulate('click');
    wrapper.find('[type="submit"]').get(0).click();
    expect(submitCallback.calledOnce).toEqual(true);
  });
});
