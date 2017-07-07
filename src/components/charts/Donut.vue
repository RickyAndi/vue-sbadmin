<template>
  <div :id="options.id"></div>
</template>

<script>
  export default {
    name: 'Donut-chart',
    data() {
      return {
        chart: null
      }
    },
    props: {
      options: {
        type: Object,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    },
    watch: {
      data(data) {
        this.$nextTick(() => {
          this.chart.setData(this.data);
        });
      }
    },
    mounted() {
      this.chart = Morris.Donut({
        element: this.options.id,
        data: this.data,
        resize: this.options.resize
      });
    }
  }
</script>

<style>
  
</style>
