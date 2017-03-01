import React from 'react';
import { Provider } from 'react-redux';
import { LocalForm, actions } from 'react-redux-form';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import sinon from 'sinon';

import PaymentInfo from '../../src/components/PaymentInfoComponent';

describe('Payment Info Component', function() {
  const mockStore = configureStore();

  it('should display an error message when the card number field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <PaymentInfo model=".paymentInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.card-number-error').exists()).toEqual(false);

    wrapper.find('.card-number').simulate('focus');
    wrapper.find('.card-number').simulate('blur');

    expect(wrapper.find('.card-number-error').exists()).toEqual(true);
  });

  it('should display an error message when an invalid card number is entered', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <PaymentInfo model=".paymentInfo" />
        </LocalForm>
      </Provider>
    );
    const cardNumberInput = wrapper.find('.card-number');

    expect(wrapper.find('.card-number-error').exists()).toEqual(false);

    cardNumberInput.simulate('change', { target: { value: 'abcd', }, });
    cardNumberInput.simulate('blur');

    expect(wrapper.find('.card-number-error').exists()).toEqual(true);

    cardNumberInput.simulate('change', { target: { value: '123412341234123', }, });
    cardNumberInput.simulate('blur');

    expect(wrapper.find('.card-number-error').exists()).toEqual(true);

    cardNumberInput.simulate('change', { target: { value: '1234123412341234', }, });
    cardNumberInput.simulate('blur');

    expect(wrapper.find('.card-number-error').exists()).toEqual(false);
  });

  it('should display an error message when the cardholder name field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <PaymentInfo model=".paymentInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.cardholder-name-error').exists()).toEqual(false);

    wrapper.find('.cardholder-name').simulate('focus');
    wrapper.find('.cardholder-name').simulate('blur');

    expect(wrapper.find('.cardholder-name-error').exists()).toEqual(true);
  });

  it('should display an error message when the card expiration month select is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <PaymentInfo model=".paymentInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.card-expiration-month-error').exists()).toEqual(false);

    wrapper.find('.card-expiration-month').simulate('focus');
    wrapper.find('.card-expiration-month').simulate('blur');

    expect(wrapper.find('.card-expiration-month-error').exists()).toEqual(true);
  });

  it('should display an error message when the card expiration year select is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <PaymentInfo model=".paymentInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.card-expiration-year-error').exists()).toEqual(false);

    wrapper.find('.card-expiration-year').simulate('focus');
    wrapper.find('.card-expiration-year').simulate('blur');

    expect(wrapper.find('.card-expiration-year-error').exists()).toEqual(true);
  });

  it('should display errors for all missing, required fields when the form is submitted', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <PaymentInfo model=".paymentInfo" />
          <button type="submit"></button>
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.card-number-error').exists()).toEqual(false);
    expect(wrapper.find('.cardholder-name-error').exists()).toEqual(false);
    expect(wrapper.find('.card-expiration-month-error').exists()).toEqual(false);
    expect(wrapper.find('.card-expiration-year-error').exists()).toEqual(false);

    wrapper.find('[type="submit"]').get(0).click();

    expect(wrapper.find('.card-number-error').exists()).toEqual(true);
    expect(wrapper.find('.cardholder-name-error').exists()).toEqual(true);
    expect(wrapper.find('.card-expiration-month-error').exists()).toEqual(true);
    expect(wrapper.find('.card-expiration-year-error').exists()).toEqual(true);
  });
});
