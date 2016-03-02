// import BrowsersStore from '../stores/BrowsersStore'
import AppDispatcher from '../AppDispatcher'
import React from 'react'

class BrowsersComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange(browser, version, event) {

    var percent;

    if (isNaN(percent = Number(event.target.value))) {
      return;
    }

    var data = {
      browser,
      version,
      percent
    }
    var actionType = event.target.checked ? 'ADD' : 'REMOVE';

    AppDispatcher.dispatch({
      actionType,
      data
    });

  }

  render() {

    if (!this.props.data.data) {
      return (<div></div>);
    }

    var browserNodes = Object.keys(this.props.data.data).map((browser) => {
      return (
        <div className="card" key={browser}>
          <div className="card-block">
            <h4 className="card-title">{browser}</h4>
            {Object.keys(this.props.data.data[browser]).map((version) => {
              var percent = this.props.data.data[browser][version];
              var id = browser + version;
              return (
                <div className="checkbox abc-checkbox abc-checkbox-success" key={version}>
                  <input id={id} onChange={this.handleChange.bind(this, browser, version)} value={percent} type="checkbox" />
                  <label htmlFor={id}>{version}</label>
                </div>
              );
            })}
          </div>
        </div>
      );
    });

    return (
      <div className="browsers">
        <div className="card-columns">
          {browserNodes}
        </div>
      </div>
    );
  }
}

BrowsersComponent.defaultProps = {
};

export default BrowsersComponent;
