/*
 Template Name: Xacton - Admin & Dashboard Template
 Author: Myra Studio
 File: Google Charts
*/


$(function () {
  'use strict';

  // Line chart
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      fontName: 'inherit',
      height: 340,
      curveType: 'function',
      fontSize: 12,
      chartArea: {
          left: '5%',
          width: '90%',
          height: 300
      },
      pointSize: 4,
      vAxis: {
        gridlines:{
            color: '#f5f5f5',
            count: 10
        },
        minValue: 0
      },
      tooltip: {
          textStyle: {
              fontName: 'inherit',
              fontSize: 14
          }
      },
      legend: { position: 'bottom' },
      lineWidth: 3,
      colors: ['#2e7ce4', '#f15050']
    };

    var chart = new google.visualization.LineChart(document.getElementById('line-chart'));

    chart.draw(data, options);
  }


  // Area Chart
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart2);

  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2013',  1000,      400],
      ['2014',  1170,      460],
      ['2015',  660,       1120],
      ['2016',  1030,      540]
    ]);

    var options = {
      fontName: 'inherit',
      height: 340,
      fontSize: 12,
      chartArea: {
        left: '7%',
        width: '80%',
        height: 300
      },
      vAxis: {
        gridlines:{
            color: '#f5f5f5',
            count: 10
        },
        minValue: 0
      },
      colors: ['#e83e8c', '#00c2b2']
    };

    var chart = new google.visualization.AreaChart(document.getElementById('area-chart'));
    chart.draw(data, options);
  }


  // Bar chart

  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawMultSeries);

  function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000]
    ]);

    var options = {
      title: 'Population of Largest U.S. Cities',
      chartArea: {width: '60%'},
      hAxis: {
        title: 'Total Population',
        minValue: 0
      },
      fontName: 'inherit',
      height: 340,
      fontSize: 12,
      vAxis: {
        title: 'City'
      },
      colors: ['#2e7ce4', '#f8ac5a']
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar-chart'));
    chart.draw(data, options);
  }


  // Candlestick Chart
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart4);

  function drawChart4() {
    var data = google.visualization.arrayToDataTable([
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
      // Treat first row as data as well.
    ], true);

    var options = {
      legend:'none',
      vAxis: {
        gridlines:{
            color: '#f5f5f5',
            count: 10
        },
        minValue: 0
      },
      fontName: 'inherit',
      height: 340,
      fontSize: 12,
      chartArea: {
        left: '7%',
        width: '80%',
        height: 300
      },
      colors: ['#3F51B5']
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('candlestick-chart'));

    chart.draw(data, options);
  }


  // Column Chart

  google.charts.load('current', {'packages':['bar']});
  google.charts.setOnLoadCallback(drawChart5);

  function drawChart5() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
    ]);

    var options = {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
      fontName: 'inherit',
      height: 340,
      fontSize: 12,
      colors: ['#f8ac5a', '#7266bb', '#23b5e2']
    };

    var chart = new google.charts.Bar(document.getElementById('column-chart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }

  // Combo Chart
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawVisualization);

  function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05',  165,      938,         522,             998,           450,      614.6],
      ['2005/06',  135,      1120,        599,             1268,          288,      682],
      ['2006/07',  157,      1167,        587,             807,           397,      623],
      ['2007/08',  139,      1110,        615,             968,           215,      609.4],
      ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ]);

    var options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {
        title: 'Cups',
        gridlines:{
          color: '#f5f5f5',
          count: 10
        },
        minValue: 0
      },
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      fontName: 'inherit',
      height: 340,
      fontSize: 12,
      chartArea: {
        left: '7%',
        width: '70%',
        height: 300
      },
      colors: ['#1d84c6', '#00c2b2', '#3F51B5', '#e83e8c', '#f8ac5a', "#132843"],
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('combo-chart'));
    chart.draw(data, options);
  }


  // Pie Chart

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart6);

  function drawChart6() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      fontName: 'inherit',
      height: 340,
      fontSize: 12,
      colors: ['#3F51B5', '#00c2b2', '#23b5e2', '#e83e8c', '#f8ac5a']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }


  // 3D Pie Chart

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart7);
  function drawChart7() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      is3D: true,
      fontName: 'inherit',
      height: 340,
      fontSize: 12,
      colors: ['#3F51B5', '#00c2b2', '#23b5e2', '#e83e8c', '#f8ac5a']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart-3d-chart'));
    chart.draw(data, options);
  }

  // Donut Chart

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart8);
  function drawChart8() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      pieHole: 0.4,
      fontName: 'inherit',
      height: 340,
      fontSize: 12,
      colors: ['#3F51B5', '#00c2b2', '#23b5e2', '#e83e8c', '#f8ac5a']
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }

  // Exploding a Slice

  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart9);
  function drawChart9() {
    var data = google.visualization.arrayToDataTable([
      ['Language', 'Speakers (in millions)'],
      ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],
      ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
      ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
      ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
      ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
      ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
      ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
    ]);

    var options = {
      title: 'Indian Language Use',
      legend: 'none',
      pieSliceText: 'label',
      slices: {  4: {offset: 0.2},
                12: {offset: 0.3},
                14: {offset: 0.4},
                15: {offset: 0.5},
      },
      fontName: 'inherit',
      height: 340,
      fontSize: 12
    };

    var chart = new google.visualization.PieChart(document.getElementById('exploding-slice-chart'));
    chart.draw(data, options);
  }
});