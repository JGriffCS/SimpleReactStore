import React from 'react';
import { Provider } from 'react-redux';
import { LocalForm, actions } from 'react-redux-form';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import sinon from 'sinon';

import AddressInfo from '../../src/components/AddressInfoComponent';

describe('Payment Info Component', function() {
  const mockStore = configureStore();

  it('should display an error message when the first name field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.first-name-error').exists()).toEqual(false);

    wrapper.find('.first-name').simulate('focus');
    wrapper.find('.first-name').simulate('blur');

    expect(wrapper.find('.first-name-error').exists()).toEqual(true);
  });

  it('should display an error message when the last name field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.last-name-error').exists()).toEqual(false);

    wrapper.find('.last-name').simulate('focus');
    wrapper.find('.last-name').simulate('blur');

    expect(wrapper.find('.last-name-error').exists()).toEqual(true);
  });

  it('should display an error message when the first address field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.address-error').exists()).toEqual(false);

    wrapper.find('.address').simulate('focus');
    wrapper.find('.address').simulate('blur');

    expect(wrapper.find('.address-error').exists()).toEqual(true);
  });

  it('should display an error message when the city field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.city-error').exists()).toEqual(false);

    wrapper.find('.city').simulate('focus');
    wrapper.find('.city').simulate('blur');

    expect(wrapper.find('.city-error').exists()).toEqual(true);
  });

  it('should display an error message when the state field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.state-error').exists()).toEqual(false);

    wrapper.find('.state').simulate('focus');
    wrapper.find('.state').simulate('blur');

    expect(wrapper.find('.state-error').exists()).toEqual(true);
  });

  it('should display an error message when the zip field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.zip-error').exists()).toEqual(false);

    wrapper.find('.zip').simulate('focus');
    wrapper.find('.zip').simulate('blur');

    expect(wrapper.find('.zip-error').exists()).toEqual(true);
  });

  it('should display an error message when an invalid zip is entered', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.zip-error').exists()).toEqual(false);

    wrapper.find('.zip').simulate('change', { target: { value: 'abc', }, });
    wrapper.find('.zip').simulate('blur');

    expect(wrapper.find('.zip-error').exists()).toEqual(true);

    wrapper.find('.zip').simulate('change', { target: { value: '12345', }, });
    wrapper.find('.zip').simulate('blur');

    expect(wrapper.find('.zip-error').exists()).toEqual(false);
  });

  it('should not display an error when any valid zip code format is entered', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.zip-error').exists()).toEqual(false);

    wrapper.find('.zip').simulate('change', { target: { value: '12345', }, });
    wrapper.find('.zip').simulate('blur');

    expect(wrapper.find('.zip-error').exists()).toEqual(false);

    wrapper.find('.zip').simulate('change', { target: { value: '12345-1234', }, });
    wrapper.find('.zip').simulate('blur');

    expect(wrapper.find('.zip-error').exists()).toEqual(false);
  });

  it('should display an error message when the country field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.country-error').exists()).toEqual(false);

    wrapper.find('.country').simulate('focus');
    wrapper.find('.country').simulate('blur');

    expect(wrapper.find('.country-error').exists()).toEqual(true);
  });

  it('should display an error message when the phone field is touched, but left blank', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.phone-error').exists()).toEqual(false);

    wrapper.find('.phone').simulate('focus');
    wrapper.find('.phone').simulate('blur');

    expect(wrapper.find('.phone-error').exists()).toEqual(true);
  });

  it('should display an error message when an invalid phone number is entered', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.phone-error').exists()).toEqual(false);

    wrapper.find('.phone').simulate('change', { target: { value: 'abc', }, });
    wrapper.find('.phone').simulate('blur');

    expect(wrapper.find('.phone-error').exists()).toEqual(true);

    wrapper.find('.phone').simulate('change', { target: { value: '9998675309', }, });
    wrapper.find('.phone').simulate('blur');

    expect(wrapper.find('.phone-error').exists()).toEqual(false);
  });

  it('should not display an error when any valid phone number format is entered', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressInfo" />
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.phone-error').exists()).toEqual(false);

    wrapper.find('.phone').simulate('change', { target: { value: '9998675309', }, });
    wrapper.find('.phone').simulate('blur');

    expect(wrapper.find('.phone-error').exists()).toEqual(false);

    wrapper.find('.phone').simulate('change', { target: { value: '(999)8675309', }, });
    wrapper.find('.phone').simulate('blur');

    expect(wrapper.find('.phone-error').exists()).toEqual(false);

    wrapper.find('.phone').simulate('change', { target: { value: '(999) 867 5309', }, });
    wrapper.find('.phone').simulate('blur');

    expect(wrapper.find('.phone-error').exists()).toEqual(false);

    wrapper.find('.phone').simulate('change', { target: { value: '(999) 867-5309', }, });
    wrapper.find('.phone').simulate('blur');

    expect(wrapper.find('.phone-error').exists()).toEqual(false);

    wrapper.find('.phone').simulate('change', { target: { value: '999-867-5309', }, });
    wrapper.find('.phone').simulate('blur');

    expect(wrapper.find('.phone-error').exists()).toEqual(false);
  });

  it('should display errors for all missing, required fields when the form is submitted', () => {
    const wrapper = mount(
      <Provider store={mockStore()}>
        <LocalForm model="testForm">
          <AddressInfo model=".addressForm" />
          <button type="submit"></button>
        </LocalForm>
      </Provider>
    );

    expect(wrapper.find('.first-name-error').exists()).toEqual(false);
    expect(wrapper.find('.last-name-error').exists()).toEqual(false);
    expect(wrapper.find('.address-error').exists()).toEqual(false);
    expect(wrapper.find('.city-error').exists()).toEqual(false);
    expect(wrapper.find('.state-error').exists()).toEqual(false);
    expect(wrapper.find('.zip-error').exists()).toEqual(false);
    expect(wrapper.find('.country-error').exists()).toEqual(false);
    expect(wrapper.find('.phone-error').exists()).toEqual(false);

    wrapper.find('[type="submit"]').get(0).click();

    expect(wrapper.find('.first-name-error').exists()).toEqual(true);
    expect(wrapper.find('.last-name-error').exists()).toEqual(true);
    expect(wrapper.find('.address-error').exists()).toEqual(true);
    expect(wrapper.find('.city-error').exists()).toEqual(true);
    expect(wrapper.find('.state-error').exists()).toEqual(true);
    expect(wrapper.find('.zip-error').exists()).toEqual(true);
    expect(wrapper.find('.country-error').exists()).toEqual(true);
    expect(wrapper.find('.phone-error').exists()).toEqual(true);
  });
});
