import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// this requires the compiler
Vue.createApp({
    template: '<div>{{ hi }}</div>'
  })
  
  // this does not
  Vue.createApp({
    render() {
      return Vue.h('div', {}, this.hi)
    }
  })