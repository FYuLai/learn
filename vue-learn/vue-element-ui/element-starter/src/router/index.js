import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  login 
} from 'pages/';
import { Form } from 'element-ui';
// this.$router this.$route

const routes = [
  {
    path:'/',
    name:'登录',
    hidden: true,
    component: login
  }
];
export default new VueRouter({
  routes,
  // strict: Process.env.NODE_ENV !== 'production '
})
Vue.use(VueRouter);