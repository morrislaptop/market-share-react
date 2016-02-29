require('normalize.css');
require('styles/App.css');

import React from 'react';
import Categories from './Categories';
import Browsers from './Browsers';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  getData(file) {
    fetch('https://raw.githubusercontent.com/Fyrd/caniuse/master/region-usage-json/alt-ww.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({data: data});
      });
  }

  componentDidMount() {

  }

  render() {
    this.getData('alt-ww');

    return (
      <div className="index container">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Select browsers in your matrix</h1>
          </div>
          <div className="row">
            <div className="col col-md-2">
              <h2>Categories</h2>
              <Categories />
            </div>
            <div className="col col-md-10">
              <h2>Browsers here</h2>
              <Browsers data={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
