/*
 Template Name: Xacton - Admin & Dashboard Template
 Author: Myra Studio
 File: Sparklines
*/


$( document ).ready(function() {
    
  var DrawSparkline = function() {
      $('#sparkline1').sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
          type: 'line',
          width: "100%",
          height: '200',
          chartRangeMax: 50,
          lineColor: '#1d84c6',
          fillColor: 'rgba(29, 132, 198, 0.3)',
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)',
          maxSpotColor:false,
          minSpotColor: false,
          spotColor:false,
          lineWidth: 1
      });

      $('#sparkline1').sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
          type: 'line',
          width: "100%",
          height: '200',
          chartRangeMax: 40,
          lineColor: '#f8ac5a',
          fillColor: 'rgba(248, 172, 90, 0.3)',
          composite: true,
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)',
          maxSpotColor:false,
          minSpotColor: false,
          spotColor:false,
          lineWidth: 1
      });
  
      $('#sparkline2').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
          type: 'bar',
          height: '200',
          barWidth: '10',
          barSpacing: '3',
          barColor: '#7266bb'
      });
      
      $('#sparkline3').sparkline([20, 40, 30, 10], {
          type: 'pie',
          width: '200',
          height: '200',
          sliceColors: ['#1d84c6', '#00c2b2', '#3F51B5', '#e3eaef']
      });

      $('#sparkline5').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
          type: 'line',
          width: "100%",
          height: '200',
          lineColor: '#afd5f0',
          lineWidth: 2,
          fillColor: 'rgba(175, 213, 240,0.3)',
          highlightLineColor: 'rgba(0,0,0,.1)',
          highlightSpotColor: 'rgba(0,0,0,.2)'
      });

      $('#sparkline5').sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
          type: 'bar',
          height: '200',
          barWidth: '10',
          barSpacing: '5',
          composite: true,
          barColor: '#f15050'
      });

      $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
          type: 'discrete',
          width: '280',
          height: '200',
          lineColor: '#2ac14e'
      });

      },
      DrawMouseSpeed = function () {
          var mrefreshinterval = 500; // update display every 500ms
          var lastmousex=-1; 
          var lastmousey=-1;
          var lastmousetime;
          var mousetravel = 0;
          var mpoints = [];
          var mpoints_max = 30;
          $('html').mousemove(function(e) {
              var mousex = e.pageX;
              var mousey = e.pageY;
              if (lastmousex > -1) {
                  mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
              }
              lastmousex = mousex;
              lastmousey = mousey;
          });
          var mdraw = function() {
              var md = new Date();
              var timenow = md.getTime();
              if (lastmousetime && lastmousetime!=timenow) {
                  var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                  mpoints.push(pps);
                  if (mpoints.length > mpoints_max)
                      mpoints.splice(0,1);
                  mousetravel = 0;
                  $('#sparkline4').sparkline(mpoints, {
                      tooltipSuffix: ' pixels per second',
                      type: 'line',
                      width: "100%",
                      height: '200',
                      chartRangeMax: 77,
                      maxSpotColor:false,
                      minSpotColor: false,
                      spotColor:false,
                      lineWidth: 1,
                      lineColor: '#f15050',
                      fillColor: 'rgba(241, 80, 80, 0.3)',
                      highlightLineColor: 'rgba(24,147,126,.1)',
                      highlightSpotColor: 'rgba(24,147,126,.2)'
                  });
              }
              lastmousetime = timenow;
              setTimeout(mdraw, mrefreshinterval);
          }
          // We could use setInterval instead, but I prefer to do it this way
          setTimeout(mdraw, mrefreshinterval); 
      };
  
  DrawSparkline();
  DrawMouseSpeed();
  
  var resizeChart;

  $(window).resize(function(e) {
      clearTimeout(resizeChart);
      resizeChart = setTimeout(function() {
          DrawSparkline();
          DrawMouseSpeed();
      }, 300);
  });
});