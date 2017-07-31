<template>
  <div class="aside-top">
    <router-link to="/" class="logo">OB QUERY</router-link>
    <p>Hi, {{userName}}~<span class="logout" @click="logout"></span></p>
  </div>
</template>

<script>
import "./side.css"
import { logOut as API_LOGOUT } from 'API_HELPER'
import { goLogin as UTILS_GoLogin } from 'UTILS_HELPER'

export default {
  data(){
    return {
      userName: ''
    }
  },
  mounted(){
     this.userName = window.__OBQUSER
  },
  methods: {
    logout(){
      API_LOGOUT().then(res => {
        if(!res.errno){
          let _port = window.location.port ? ':' + window.location.port : ''
          let _destUrl = window.location.protocol + '//' + window.location.hostname + _port
          UTILS_GoLogin(_destUrl)
        }
      })
    }
  }
}
</script>

<style scoped>
.aside-top{
  background-color: #ee4f6a;
	font-weight: bold;
	font-size: 20px;
}
.logo{
	display: block;
	padding: 20px 25px;
}
.logo:hover{
	text-decoration: none;
}
.aside-top p{
  font-size: 14px;
  padding: 0 0px 15px 5px;
  text-align: center;
}
.aside-top .logout{
  margin-left: 10px;
  padding: 0px 10px;
  background: url(http://p7.qhimg.com/t01582e420abd42793a.png) center 0px no-repeat;
  background-size: 18px;
  cursor: pointer;
}
</style>

