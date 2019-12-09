import Vue from 'vue'
import App from './App.vue'
import VueTelInput from 'vue-tel-input'

Vue.use(VueTelInput)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
