import React from 'react';
import { connect } from 'react-redux';
import { Control, Fieldset, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
// Only validate specific tyypes  once the box is no longer empty
const cardNumber = (val) => !val || /^[0-9]{16}?$/.test(val);

class PaymentInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <Fieldset model={this.props.model}>
          <div className="col-xs-12 col-md-12">
            <div><label>Card Number: </label></div>
            <Control.text model=".cardNumber" validators={{ required, cardNumber, }} className="form-control card-number" />
            <Errors className="form-error card-number-error" model=".cardNumber" show="touched" messages={{ required: 'Required', cardNumber: 'Invalid Card Number', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div><label>Cardholder Name: </label></div>
            <Control.text model=".cardholderName" validators={{ required, }} className="form-control cardholder-name" />
            <Errors className="form-error cardholder-name-error" model=".cardholderName" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div><label>Expiration Date: </label></div>
            <div className="col-xs-4">
              <Control.select model=".expirationMonth" validators={{ required }} className="form-control card-expiration-month">
                <option value=""></option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Control.select>
              <Errors className="form-error card-expiration-month-error" model=".expirationMonth" show="touched" messages={{ required: 'Required', }} />
            </div>
            <div className="col-xs-8">
              <Control.select model=".expirationYear" validators={{ required }} className="form-control card-expiration-year">
                <option value=""></option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </Control.select>
              <Errors className="form-error card-expiration-year-error" model=".expirationYear" show="touched" messages={{ required: 'Required', }} />
            </div>
          </div>
        </Fieldset>
        <div className="col-xs-12 col-md-12">
          <input type="checkbox" className="billing-address-toggle" onClick={this.props.billingToggleFn}/> Billing Address Differs From Shipping Address
        </div>
      </div>
    );
  }
}

export default connect(null)(PaymentInfo);
