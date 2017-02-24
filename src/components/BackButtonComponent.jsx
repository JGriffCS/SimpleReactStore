import React from 'react';
import { hashHistory } from 'react-router';

class BackButton extends React.Component {
  returnToCatalog() {
    hashHistory.push('/catalog');
  }

  render() {
    return(
      <div className="back-button-container">
        <button onClick={this.returnToCatalog}>Return to Catalog</button>
      </div>
    )
  }
}

export default BackButton;
