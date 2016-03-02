/*global Chart*/
import BrowsersStore from '../stores/BrowsersStore'
import React from 'react'
import update from 'react-addons-update'
import { Pie as PieChart } from 'react-chartjs'
import _ from 'lodash'

class ReportComponent extends React.Component {

  constructor(props) {
    super(props);

    Chart.defaults.global.responsive = true;
    this.onChange = this.onChange.bind(this);

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

  componentDidMount() {
    BrowsersStore.on('change', this.onChange)
  }

  onChange() {
    var selected = BrowsersStore.getSelected();
    var total = _.sum(_.values(selected));

    var data = update(this.state.data, {
      0: {
        value: {$set: 100 - total}
      },
      1: {
        value: {$set: total}
      }
    });

    console.log(total);
    console.log(data);

    this.setState({data});
  }

  render() {
    return (
      <div className="report"><PieChart data={this.state.data} options={this.state.chartOptions} /></div>
    );
  }
}

ReportComponent.defaultProps = {
};

export default ReportComponent;
