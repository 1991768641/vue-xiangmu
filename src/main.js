import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'assets/stylus/border.styl';
import 'assets/reset.css';
import 'assets/othercss/animate.css';
import 'store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


