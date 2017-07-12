<template>
  <div :id="id" :style="styleObject">
    
  </div>
</template>

<script>
  require('../libs/jquery.flot');
  require('../libs/jquery.flot.pie');
  require('../libs/jquery.flot.resize');
  require('../libs/jquery.flot.time');

  export default {
    name: 'plot',
    props: {
      id: {
        type: String,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      height: {
        type: Number,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      options: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        plot: null
      }
    },
    computed: {
      styleObject() {
        return {
          width: this.width.toString() + 'px',
          height: this.height.toString() + 'px'
        }
      }
    },
    methods: {
      redraw() {
        const plotElement = $('#' + this.id);
        this.plot = $.plot(plotElement, this.data, this.options);
      }
    },
    mounted() {
      const plotElement = $('#' + this.id);
      this.plot = $.plot(plotElement, this.data, this.options);
    }
  }
</script>

<style>
  
</style>