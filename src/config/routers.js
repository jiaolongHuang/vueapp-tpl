import Index from '../views/index.vue'
import Test from '../views/test.vue'
import _404 from '../views/404.vue'

import { goLogin as UTILS_GoLogin } from 'UTILS_HELPER'

const routers = [{
  path: '/',
  name: 'index',
  component: Index,
  beforeEnter: (to, from, next) => {
    console.log('before go / path');
    // next() is important
    next();
  },
  children: [{
  	path: 'test',
    name: 'test',
  	component: Test
  }]
},{
    path: '*',
    component: _404
  }]

export default routers;