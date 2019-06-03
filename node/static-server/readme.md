## static 
koa-static 
为什么要配置
静态资源 图片 html css js 
不会随着服务运行改变内容
assets 资源


## path
path.join() 将路径的各个部分连起来 处理了各个平台的分割符号 windows:\
类unix /

##formidable 
fields 非[type="file"] 内容都会到
files [type="file"]
## 静态资源服务
file://xxxxxxxxx本地文件读取
服务器:
http://localhost:9090
<!-- 访问图片时发了一个请求 -->
html 里面的引入的图片 js css 都会发出一个请求然后 这些都是静态资源
所以 url 和服务器磁盘路径一一对应
1. 有index.html 的时候自动打开
2. 没有 列出所有文件 文件夹
用koa-static 的作用就是在 html 里面正确引入 你指定目录下的资源
处理 static目录下面的资源 映射为请求路径
/static/1.png 返回1.png的内容
(koa-static)
业内擅长静态资源服务器: Nginx 