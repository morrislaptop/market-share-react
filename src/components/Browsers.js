import React from 'react';
var PieChart = require('react-chartjs').Pie;

class BrowsersComponent extends React.Component {

  constructor(props) {
    super(props);

    Chart.defaults.global.responsive = true;
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      data: [
        {
          value: 100,
          color:'#F7464A',
          highlight: '#FF5A5E',
          label: 'Not Covered'
        },
        {
          value: 0,
          color: '#46BFBD',
          highlight: '#5AD3D1',
          label: 'Covered'
        }
      ],
      chartOptions: {}
    };
  }

  handleChange(event) {

    var value;

    if (isNaN(value = Number(event.target.value))) {
      return;
    }

    if (! event.target.checked) {
      value *= -1;
    }

    this.setState({
      data: [
        {
          value: 100,
          color:'#F7464A',
          highlight: '#FF5A5E',
          label: 'Not Covered'
        },
        {
          value: this.state.data[1].value + Number(event.target.value),
          color: '#46BFBD',
          highlight: '#5AD3D1',
          label: 'Covered'
        }
      ],
      chartOptions: {}
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
                  <input id={id} onChange={this.handleChange} value={percent} type="checkbox" />
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

        <div><PieChart data={this.state.data} options={this.state.chartOptions} /></div>
      </div>
    );
  }
}

BrowsersComponent.defaultProps = {
};

export default BrowsersComponent;
