import Vue from 'vue'
import { plugin } from 'vue-function-api'
import App from './AppExample'

Vue.use(plugin)

const app = new Vue({
  render(h) {
    return h(App)
  },
})

export default app

app.$mount('#app')
