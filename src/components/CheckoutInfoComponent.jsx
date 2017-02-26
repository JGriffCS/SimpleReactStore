import React from 'react';
import { LocalForm, Control, actions } from 'react-redux-form';

import AddressInfo from './AddressInfoComponent';
import PaymentInfo from './PaymentInfoComponent';

const defaultFormValues = {
    shippingAddress: {
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
    paymentInfo: {
      cardNumber: '',
      cardholderName: '',
      expirationDate: '',
    },
};

class CheckoutInfo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      useBillingAddress: false,
    };
  }

  toggleBillingAddress() {
    this.setState({ useBillingAddress: !this.state.useBillingAddress });
  }

  handleSubmit(values) {
    // TODO: Order Complete screen
    console.log('here');
  }

  handleSubmitFailure(formState) {
    // TODO: Custom handle failure?
  }

  render() {
    const initialFormValues = Object.assign({}, defaultFormValues, this.props.initialValues);
    // TODO: Known warning with react-redux-form unknown prop: https://github.com/davidkpiano/react-redux-form/issues/623
    return (
      <LocalForm model="checkoutForm" initialState={initialFormValues} onSubmit={(values) => this.handleSubmit(values)} onSubmitFailed={(formState) => this.handleSubmitFailure(formState)} className="checkout-info">
        <div className="section">
          <div className="section-header">Shipping Information</div>
          <AddressInfo model=".shippingAddress" />
        </div>
        <div className="section">
          <div className="section-header">Payment Information</div>
          <PaymentInfo model=".paymentInfo" billingToggleFn={this.toggleBillingAddress.bind(this)} />
        </div>
        {this.state.useBillingAddress === true ? (
          <div className="section">
            <div className="section-header">Billing Information</div>
            <AddressInfo model=".billingAddress" />
          </div>
        ) : ''}
        <div>
          <button className="checkout-button" type="submit">Complete Purchase</button>
        </div>
      </LocalForm>
    )
  }
}

export default CheckoutInfo;
