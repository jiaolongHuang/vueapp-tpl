import Index from '../views/index.vue'
import _404 from '../views/404.vue'

import { goLogin as UTILS_GoLogin } from 'UTILS_HELPER'

const routers = [{
  path: '/',
  name: 'index',
  //hjl: 设置默认路径
  redirect: 'query/pc',
  component: Index,
  beforeEnter: (to, from, next) => {

    !window.__TEST
      && API_GetCurUser().then(res => {
      if(res.errno === 1001){
       UTILS_GoLogin()
      }else{
        window.__OBQUSER = res.data
        next();
      }
    })
  },
  children: [{
  	path: 'query/:plat',
    name: 'query',
  	component: Query
  }]
},{
    path: '*',
    component: _404
  }]

export default routers;