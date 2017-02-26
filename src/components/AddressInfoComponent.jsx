import React from 'react';
import { Control, Fieldset, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
// Only validate specific tyypes  once the box is no longer empty
const phone = (val) => !val.length || /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(val);
const zip = (val) => !val.length || /^[0-9]{5}(?:-[0-9]{4})?$/.test(val);

class AddressInfo extends React.Component {
  render() {
    return (
      <div className="row">
        <Fieldset model={this.props.model}>
          <div className="col-xs-12 col-md-6">
            <div>First Name: </div>
            <Control.text model=".firstName" validators={{ required, }} className="form-control" />
            <Errors className="error" model=".firstName" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div>Last Name: </div>
            <Control.text model=".lastName" validators={{ required, }} className="form-control" />
            <Errors className="error" model=".lastName" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-12">
            <div>Address Line 1: </div>
            <Control.text model=".address1" validators={{ required, }} className="form-control" />
            <Errors className="error" model=".address1" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-12">
            <div>Address Line 2: </div>
            <Control.text model=".address2" className="form-control" />
          </div>
          <div className="col-xs-12 col-md-4">
            <div>City: </div>
            <Control.text model=".city" validators={{ required, }} className="form-control" />
            <Errors className="error" model=".city" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-5">
            <div>State/Province/Region: </div>
            <Control.text model=".state" validators={{ required, }} className="form-control" />
            <Errors className="error" model=".state" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-3">
            <div>ZIP: </div>
            <Control.text model=".zip" validators={{ required, zip }} className="form-control" />
            <Errors className="error" model=".zip" show="touched" messages={{ required: 'Required', zip: 'Invalid Zip', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div>Country: </div>
            <Control.text model=".country" validators={{ required, }} className="form-control" />
            <Errors className="error" model=".country" show="touched" messages={{ required: 'Required', }} />
          </div>
          <div className="col-xs-12 col-md-6">
            <div>Phone Number: </div>
            <Control.text model=".phone" validators={{ required, phone }} className="form-control" />
            <Errors className="error" model=".phone" show="touched" messages={{ required: 'Required', phone: 'Invalid Phone', }} />
          </div>
        </Fieldset>
      </div>
    );
  }
}

export default AddressInfo;
