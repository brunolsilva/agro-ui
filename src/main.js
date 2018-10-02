import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import VMoney from 'v-money'
import TheMask from 'vue-the-mask'

Vue.use(BootstrapVue);
Vue.use(VMoney);
Vue.use(TheMask);

var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
