import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="header-container">
          I'll be replaced with a header component!!!
        </div>
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
