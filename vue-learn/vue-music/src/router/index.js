import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/pages/search'
import  Recommend from '@/components/pages/Recommend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path:'/recommend',
      name: 'Recommend',
      component:Recommend
    }
  ]
})
