<template>
  <div class="container-fluid">
    <div class="row">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            Charts
          </h1>
          <ol class="breadcrumb">
            <li>
              <i class="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
            </li>
            <li class="active">
              <i class="fa fa-bar-chart-o"></i> Charts
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <h2 class="page-header">Flot Charts</h2>
        <p class="lead">Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features. For full usage instructions and documentation for Flot Charts, visit <a href="http://www.flotcharts.org/">http://www.flotcharts.org/</a>.</p>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-bar-chart-o"></i> Line Graph Example with Tooltips</h3>
          </div>
          <div class="panel-body">
            <div class="flot-chart">
                <plot ref="lineChart" :id="'plot-chart-line'" :height="400" :width="1000" :options="plotData.sincos.options" :data="plotData.sincos.data">
                </plot>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8">
        <div class="panel panel-green">
          <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Pie Chart Example with Tooltips</h3>
          </div>
          <div class="panel-body">
            <div class="flot-chart">
              <plot ref="pieChart" :id="'plot-chart-pie'" :height="400" :width="600" :options="plotData.donut.options" :data="plotData.donut.data">
              </plot>
            </div>
            <div class="text-right">
              <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-12">
        <h2 class="page-header">Morris Charts</h2>
        <p class="lead">Morris.js is a very simple API for drawing line, bar, area and donut charts. For full usage instructions and documentation for Morris.js charts, visit <a href="http://morrisjs.github.io/morris.js/">http://morrisjs.github.io/morris.js/</a>.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-red">
          <div class="panel-heading">
            <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i> Line Graph Example with Tooltips</h3>
          </div>
          <div class="panel-body">
            <line-chart :data="morrisData.line.data" :options="morrisData.line.options"></line-chart>
            <div class="text-right">
                <a href="#">View Details <i class="fa fa-arrow-circle-right"></i></a>
            </div>
          </div>
        </div>
      </div>  
    </div>

  </div> 
</template>

<script>
  import Plot from '../Plot';
  import {LineChart} from '../charts';

  export default {
    name: 'Chart-page',
    components: {
      plot: Plot,
      'line-chart': LineChart
    },
    data() {
      return {
        morrisData: {
          line: {
            options: {
              id: 'morris-line-chart',
              xkey: 'd',
              ykeys: ['visits'],
              labels: ['Visits'],
              smooth: false,
              resize: true
            },
            data: [
              {
                d: '2012-10-01',
                visits: 802
              }, 
              {
                d: '2012-10-02',
                visits: 783
              }, 
              {
                d: '2012-10-03',
                visits: 820
              }, 
              {
                d: '2012-10-04',
                visits: 839
              }, 
              {
                d: '2012-10-05',
                visits: 792
              }, 
              {
                d: '2012-10-06',
                visits: 859
              }, 
              {
                d: '2012-10-07',
                visits: 790
              }, 
              {
                d: '2012-10-08',
                visits: 1680
              }, 
              {
                d: '2012-10-09',
                visits: 1592
              }, 
              {
                d: '2012-10-10',
                visits: 1420
              }, 
              {
                d: '2012-10-11',
                visits: 882
              }, 
              {
                d: '2012-10-12',
                visits: 889
              }, 
              {
                d: '2012-10-13',
                visits: 819
              }, 
              {
                d: '2012-10-14',
                visits: 849
              }, 
              {
                d: '2012-10-15',
                visits: 870
              }, 
              {
                d: '2012-10-16',
                visits: 1063
              }, 
              {
                d: '2012-10-17',
                visits: 1192
              }, 
              {
                d: '2012-10-18',
                visits: 1224
              }, 
              {
                d: '2012-10-19',
                visits: 1329
              }, 
              {
                d: '2012-10-20',
                visits: 1329
              }, 
              {
                d: '2012-10-21',
                visits: 1239
              }, 
              {
                d: '2012-10-22',
                visits: 1190
              }, 
              {
                d: '2012-10-23',
                visits: 1312
              }, 
              {
                d: '2012-10-24',
                visits: 1293
              }, 
              {
                d: '2012-10-25',
                visits: 1283
              }, {
                d: '2012-10-26',
                visits: 1248
              }, 
              {
                d: '2012-10-27',
                visits: 1323
              }, 
              {
                d: '2012-10-28',
                visits: 1390
              }, 
              {
                d: '2012-10-29',
                visits: 1420
              }, 
              {
                d: '2012-10-30',
                visits: 1529
              }, 
              {
                d: '2012-10-31',
                visits: 1892
              }
            ]
          }
        },
        plotData: {
          sincos: {
            data: [
              {
                data: [[0,0]],
                label: "sin(x)"
              }, 
              {
                data: [[0,1]],
                label: "cos(x)"
              }
            ],
            options: {
              series: {
                lines: {
                  show: true
                },
                points: {
                  show: true
                }
              },
              grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
              },
              yaxis: {
                min: -1.2,
                max: 1.2
              },
              tooltip: true,
              tooltipOpts: {
                content: "'%s' of %x.1 is %y.4",
                shifts: {
                  x: -60,
                  y: 25
                }
              }
            }
          },
          donut: {
            data: [
              {
                label: "Series 0",
                data: 1
              }, 
              {
                label: "Series 1",
                data: 3
              }, 
              {
                label: "Series 2",
                data: 9
              },
              {
                label: "Series 3",
                data: 20
              }
            ],
            options: {
              series: {
                pie: {
                  show: true
                }
              },
              grid: {
                hoverable: true
              },
              tooltip: true,
              tooltipOpts: {
                content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
                shifts: {
                  x: 20,
                  y: 0
                },
                defaultTheme: false
              }
            }
          }
        }
      };
    },
    methods: {

    },
    mounted() {
      for (var i = 0; i < 12; i += 0.2) {
        this.plotData.sincos.data[0].data.push([i, Math.sin(i + 0)]);
        this.plotData.sincos.data[1].data.push([i, Math.cos(i + 0)]);
      }
      this.$refs.lineChart.redraw();
    }

  }
</script>

<style>
  
</style>