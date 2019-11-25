import Vue from 'vue'
import Vuex from 'vuex'
import scroll from './modules/scroll.js';
import goods from './modules/goods.js';
import cart from './modules/cart.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    scroll,
    goods
  }
})
