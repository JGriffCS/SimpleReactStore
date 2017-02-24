import React from 'react';
import { connect } from 'react-redux';

import Header from './HeaderContainer.jsx';

class Layout extends React.Component {
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

export default connect(null)(Layout);
