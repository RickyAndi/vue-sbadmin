<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12">
        <h2>Food he have</h2>
        <donut-chart :data="donutChart.data" :options="donutChart.options"></donut-chart>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../services/http';
  import {DonutChart} from '../charts';

  export default {
    name: 'User-data-food-page',
    components: {
      'donut-chart': DonutChart
    },
    data() {
      return {
        marks: [],
        donutChart: {
          options: {
            id: 'donut-chart-area',
            resize: false
          },
          data: [{label: '', value: 0}]
        }
      }
    },
    methods: {
      setDonutChartData(foodsData) {
        console.log(foodsData)
        const formatedFoodData = foodsData.map((foodData) => {
          return {
            label: foodData.name,
            value: foodData.value
          }
        });
        this.donutChart.data = formatedFoodData;
      }
    },
    beforeRouteEnter (to, from, next) {
      const userId = to.params.userId;
      const userFoodsUrl = 'http://localhost:9000/users/foods/' + userId;
      http.get(userFoodsUrl)
        .then((foodsData) => {
          next(vm => {
            vm.setDonutChartData(foodsData.foods)
          })
        })
    },
  }
</script>

<style>
  
</style>