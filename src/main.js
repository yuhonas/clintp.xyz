import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-131284430-1',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
