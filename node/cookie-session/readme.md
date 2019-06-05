## 

无状态

## cookie

本地存储
怎么来：
1. JS  document.cookie 可读 可写
2. 服务端通过 set-Cookie 响应头设置 cookie

内容：
name:
value:
path: cookie 在哪个路径下效
/      /所有路径
/user     /user  user 以及下面user 下面的
/user/abc    /user/abc user/abc  以及下面的

domain:

httpOnly: true/false
设置为true 就不能通过js 获取cookie的值
maxAge: 在几秒后删除cookie
secure:安全 只会在 https 协议下传输
koa : ms  js :s

作用范围：
domain + path
在什么域名什么路径下面失效
检查存储的cookie, 符合当前作用域的会发送给服务端的
而且：HTTP 传输报文的大小
放在Cookie 请求头里面发送。

用途： 
状态管理，t
用户个性化设置， f
规定死

## session 
会话 
靠后台语言自己实现
很多个用户产生很多个session

userId 
sessionId  用户有会话的时候  通过自己sessionId 查询自己的状态
cookie ： sessionID=id