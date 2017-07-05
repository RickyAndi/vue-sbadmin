<template>
  <div id="app">
    <div id="wrapper">
      <Navbar></Navbar>
      <div id="page-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

window.$ = window.jQuery = require('jquery')
require('bootstrap/dist/js/bootstrap')

import NProgress from 'nprogress';
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar: Navbar
  },
  watch: {
    $route() {
      NProgress.start();
      setTimeout(() => {
        NProgress.done();
      }, 750);
    }
  },
  mounted() {
    NProgress.configure({ showSpinner: false });
  }
}
</script>

<style>

@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import './assets/css/sb-admin.css';
@import '../node_modules/font-awesome/css/font-awesome.css';
@import './assets/css/morris.css';
@import '../node_modules/nprogress/nprogress.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#nprogress .bar {
  height: 4px !important;
}

</style>
