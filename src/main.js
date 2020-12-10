import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { MdButton, MdCheckbox, MdField, MdCard, MdToolbar } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdCheckbox)
Vue.use(MdField)
Vue.use(MdCard)
Vue.use(MdToolbar)

new Vue({
  render: h => h(App),
}).$mount('#app')
