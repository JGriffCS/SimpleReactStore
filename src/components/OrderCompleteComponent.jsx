import React from 'react';
import { connect } from 'react-redux';
import BackButton from '../components/BackButtonComponent';

class OrderComplete extends React.Component {
  render() {
    return (
      <div className="completion-info text-center">
        <div>
          <h1>Purchase Complete!</h1>
        </div>
        <div>
          <p>Your order number is: <strong>{this.props.orderId}</strong></p>
          <p>Thank you for your business!</p>
          <p>You should receive your items in 3 to 5 business days.</p>
          <p>Please direct any questions, comments, or concerns to contact@thissite.com.</p>
        </div>
        <div>
          <BackButton />
        </div>
      </div>
    )
  }
}

export default connect(null)(OrderComplete);
