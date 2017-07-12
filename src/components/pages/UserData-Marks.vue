<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12">
        <h2>Lessons Score</h2>
        <bar-chart :data="barChart.data" :options="barChart.options"></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http';
  import {BarChart} from '../charts';
  const config = require('../../config.json');

  export default {
    name: 'User-data-marks-page',
    components: {
      'bar-chart': BarChart
    },
    data() {
      return {
        barChart: {
          options: {
            id: 'bar-chart-area',
            xkey: 'name',
            ykeys: ['value'],
            labels: ['value']
          },
          data: []
        }
      }
    },
    methods: {
      setBarChart(marksData) {
        this.barChart.data = marksData;
      }
    },
    beforeRouteEnter (to, from, next) {
      const userId = to.params.userId;
      const userMarkUrl = config['server_root'] + '/users/mark/' + userId;
      http.get(userMarkUrl)
        .then((marksData) => {
          next(vm => {
            vm.setBarChart(marksData.marks);
          })
        })
    },
  }
</script>

<style>
  
</style>