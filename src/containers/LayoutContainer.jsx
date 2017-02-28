import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import { setCartVisibility } from '../actions/cart';

import Header from './HeaderContainer';

class Layout extends React.Component {
  componentDidMount() {
    // TODO: Hashhistory listeners fired twice due to bug: https://github.com/ReactTraining/history/issues/427. Maybe upgrade (or downgrade?) library
    hashHistory.listen(() => {
      this.props.setCartVisibility(false);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(null, dispatch => bindActionCreators({ setCartVisibility }, dispatch))(Layout);
