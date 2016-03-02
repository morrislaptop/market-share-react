require('styles/App.css');

import React from 'react';
import Browsers from './Browsers';
import Report from './Report';
import CountrySelector from './CountrySelector';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  getData() {
    fetch('https://raw.githubusercontent.com/Fyrd/caniuse/master/region-usage-json/alt-ww.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({data: data});
      });
  }

  componentDidMount() {
    this.getData('alt-ww');
  }

  render() {
    return (
      <div className="index container">
        <div className="row">
          <div className="col col-md-12">
            <h1>Select browsers in your matrix</h1>
            <CountrySelector />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-12 browsers">
            <Browsers data={this.state.data} />
          </div>
        </div>
        <footer><Report /></footer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
