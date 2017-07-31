import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routers.js'
import App from './views/app.vue'

const components = [
  VueRouter
]

// 引入vue-router及其他组件
components.forEach((item) => {
  Vue.use(item);
});


// 实例化vue-router
const router = new VueRouter({
    mode: 'history',
    routes
});


new Vue({
	el: '#app-wrap',
  router,
  template:'<App/>',
  components:{App}
})

