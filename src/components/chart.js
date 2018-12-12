import React, {Component} from 'react'

var GoogleLineChart = React.createClass({

  render() {
    return React.DOM.div({id: this.props.graphName, style: {margin: 0 auto; width: 1000px; height: 600px;}});
  },

  componentDidMount: function(){
    this.drawVisualization();
  },

  componentDidUpdate: function(){
    this.drawVisualization();
  },

  function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
     ['Charity', 'SPCA', 'SF Food Bank', 'Hamilton Familes', 'Golden Gate Park', '', 'Average'],
     ['Felix',  1.50,      3.00,         5.50,             8.00,           0,      3.00],
     ['Lauren',  12.00,      3.75,        6.25,             5.50,          0,      7.75],
     ['Lucy',  4.25,      10.25,        2.50,             5.00,           0,      6],
  ]);

    var options = {
      title : 'Donation contributions by Child',
      vAxis: {title: 'Amount in Dollars'},
      hAxis: {title: 'Child or Children'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
  };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }


});

export default chart


// var GoogleLineChart = React.createClass({
//   render: function(){
//     return React.DOM.div({id: this.props.graphName, style: {height: "500px"}});
//   },
//   componentDidMount: function(){
//     this.drawCharts();
//   },
//   componentDidUpdate: function(){
//     this.drawCharts();
//   },
//   drawCharts: function(){
//     var data = google.visualization.arrayToDataTable(this.props.data);
//     var options = {
//       title: 'ABC',
//     };
//
//     var chart = new google.visualization.LineChart(
//       document.getElementById(this.props.graphName)
//     );
//     chart.draw(data, options);
//   }
// });
