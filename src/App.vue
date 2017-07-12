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
window.$ = window.jQuery = require('jquery');
require('bootstrap/dist/js/bootstrap');

import NProgress from 'nprogress';
import Navbar from './components/Navbar';
import session from './services/session';

export default {
  name: 'app',
  components: {
    Navbar: Navbar
  },
  watch: {
    $route() {
      if (session.get('nprogress:start') !== 'true') {
        NProgress.start();
        session.set('nprogress:start', 'true');
      } 
      
      setTimeout(() => {
        NProgress.done();
        session.set('nprogress:start', 'false');
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
@import '../node_modules/toastr/build/toastr.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#nprogress .bar {
  height: 4px !important;
}

.page-component {
  min-height: 700px;
}

</style>

