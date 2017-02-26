import React from 'react';
import { Control, Fieldset, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
// Only validate specific tyypes  once the box is no longer empty
const cardNumber = (val) => !val.length || /^[0-9]{16}?$/.test(val);

class PaymentInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <Fieldset model={this.props.model}>
          <div className="col-xs-12 col-md-12">
            <div><label>Card Number: </label></div>
            <Control.text model=".cardNumber" validators={{ required, cardNumber, }} className="form-control" />
            <Errors className="error" model=".cardNumber" show="touched" messages={{ required: 'Required', cardNumber: 'Invalid Card Number', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div>Cardholder Name: </div>
            <Control.text model=".cardholderName" validators={{ required, }} className="form-control" />
            <Errors className="error" model=".cardholderName" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div>Expiration Date: </div>
            <Control.text model=".expirationDate" validators={{ required }} className="form-control" />
            <Errors className="error" model=".expirationDate" show="touched" messages={{ required: 'Required', }} />
          </div>
        </Fieldset>
        <div className="col-xs-12 col-md-12">
          <input type="checkbox" className="billing-address-toggle" onClick={this.props.billingToggleFn}/> Billing Address Differs From Shipping Address
        </div>
      </div>
    );
  }
}

export default PaymentInfo;
