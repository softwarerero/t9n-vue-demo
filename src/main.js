import Vue from "vue"
import { T9n } from 'meteor-accounts-t9n/build/t9n.js'

import App from "./App.vue"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
