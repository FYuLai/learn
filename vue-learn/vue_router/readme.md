前端路由实现，  核心本质是 不刷新页面 但是可以在页面上显示不同的内容 单页内容的本质
用户体验
1. hash 实现， 
 url #hash 部分
 改变 不会刷新页面 在传统的url里面  /path?queryString 重刷页面
 页面打开慢 ， 独立的http请求
 怎么利用他呢？ 动态的加载组件 及发起请求
 js DHTML 

 - 单页应用避免了传统后端路由每次跳转都刷新页面，给用户带来的，慢 白屏(多了http请求) 前端路由，立即加载 路由对应的组件,其中最简单的方式是hashchange
 http://localhost:8080#a 


 2. route-link组件
  to="#/"  props 
  home  slot
  