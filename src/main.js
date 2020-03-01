import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import Mermaid from 'mermaid'
// import '../public/static/editor.md/css/editormd.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
