import React from 'react';

class BrowsersComponent extends React.Component {

  render() {

    if (!this.props.data.data) {
      return;
    }

    var browserNodes = Object.keys(this.props.data.data).map(function(browser) {
      return (
        <div>{browser}</div>
      );
    });

    return (
      <div className="browsers">
        <ul>
          {browserNodes2}
        </ul>
      </div>
    );
  }
}

BrowsersComponent.defaultProps = {
};

export default BrowsersComponent;
