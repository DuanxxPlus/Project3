import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import router from './js/router.js';
import axios from 'axios';
import MintUI from 'mint-ui';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(MintUI);

Vue.prototype.$http = axios;

import './css/cssReset.css';
import './css/all.css';
import '../node_modules/mint-ui/lib/style.css';

import './js/nav/iconfont';
import './js/search/iconfont';
import './js/search/iconfont2';
import './js/iconfont';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
