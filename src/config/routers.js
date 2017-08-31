import Index from '../views/index.vue'
import Blue from '../views/Blue.vue'
import _404 from '../views/404.vue'

import { goLogin as UTILS_GoLogin } from 'HELPER/utils.js'

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
  	path: 'blue',
    name: 'blue',
  	component: Blue
  }]
},{
    path: '*',
    component: _404
  }]

export default routers;