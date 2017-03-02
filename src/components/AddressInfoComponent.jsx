import React from 'react';
import { connect } from 'react-redux';
import { Control, Fieldset, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
// Only validate specific tyypes  once the box is no longer empty
const phone = (val) => !val || /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(val);
const zip = (val) => !val || /^[0-9]{5}(?:-[0-9]{4})?$/.test(val);

class AddressInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <Fieldset model={this.props.model}>
          <div className="col-xs-12 col-md-6">
            <div><label>First Name: </label></div>
            <Control.text model=".firstName" validators={{ required, }} className="form-control first-name" />
            <Errors className="form-error first-name-error" model=".firstName" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div><label>Last Name: </label></div>
            <Control.text model=".lastName" validators={{ required, }} className="form-control last-name" />
            <Errors className="form-error last-name-error" model=".lastName" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-12">
            <div><label>Address Line 1: </label></div>
            <Control.text model=".address1" validators={{ required, }} className="form-control address" />
            <Errors className="form-error address-error" model=".address1" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-12">
            <div><label>Address Line 2: </label></div>
            <Control.text model=".address2" className="form-control" />
          </div>
          <div className="col-xs-12 col-md-4">
            <div><label>City: </label></div>
            <Control.text model=".city" validators={{ required, }} className="form-control city" />
            <Errors className="form-error city-error" model=".city" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-5">
            <div><label>State/Province/Region: </label></div>
            <Control.text model=".state" validators={{ required, }} className="form-control state" />
            <Errors className="form-error state-error" model=".state" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-3">
            <div><label>ZIP: </label></div>
            <Control.text model=".zip" validators={{ required, zip }} className="form-control zip" />
            <Errors className="form-error zip-error" model=".zip" show="touched" messages={{ required: 'Required', zip: 'Invalid Zip', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div><label>Country: </label></div>
            <Control.text model=".country" validators={{ required, }} className="form-control country" />
            <Errors className="form-error country-error" model=".country" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div><label>Phone Number: </label></div>
            <Control.text model=".phone" validators={{ required, phone }} className="form-control phone" />
            <Errors className="form-error phone-error" model=".phone" show="touched" messages={{ required: 'Required', phone: 'Invalid Phone', }} />
          </div>
        </Fieldset>
      </div>
    );
  }
}

export default connect(null)(AddressInfo);
