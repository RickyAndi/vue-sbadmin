<template>
  <div :id="options.id"></div>
</template>

<script>
  export default {
    name: 'Line-chart',
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
      this.chart = Morris.Line({
        element: this.options.id,
        data: this.data,
        xkey: this.options.xkey,
        ykeys: this.options.ykeys,
        labels: this.options.labels,
        smooth: this.options.smoth,
        resize: this.options.resize
      });
    }
  }
</script>

<style>
  
</style>
