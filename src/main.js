// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate';
import {ServerTable, ClientTable, Event} from 'vue-tables-2';

Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(ClientTable);

Vue.component('delete', {
props:['data'],
template:`<a class='delete' @click='erase'></a>`,
methods:{
erase() {
let id = this.data.id; // delete the item
}
}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
