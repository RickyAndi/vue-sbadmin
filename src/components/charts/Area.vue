<template>
  <div :id="options.id"></div>
</template>

<script>
  export default {
    name: 'Area-chart',
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
      this.chart = Morris.Area({
        element: this.options.id,
        data: this.data,
        xkey: this.options.xkey,
        ykeys: this.options.ykeys,
        labels: this.options.labels,
        pointSize: this.options.pointSize,
        hideHover: this.options.hideHover,
        resize: this.options.resize
      });
    }
  }
</script>

<style>
  
</style>
