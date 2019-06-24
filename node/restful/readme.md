- json 格式是标准的数据交换
- 前后端开发， /api json 格式来交流
- 全栈  fullstack cnpm

- restful 一切皆资源
  暴露资源
- 设计良好的URL
  /posts
  /posts/:id
  /comments
  /comments/:id
  /posts/1/comments
http 动词 
GET 查询 
加一条评论 增加一个资源
POST  新增/comments  

delete 动词  /posts/2
puts 修改  put patch 
put 把全新的所有的内容，去替换旧的内容
patch 只要传递一个要更新的字段，局部


-restful 考点
认为一切皆资源 url 是唯一定位资源的符号
他有一定的设计原则，
http动词是web资源的状态转换动词


操作 SQL方法 http动词
create  insert post 
read  select get 
update update put/patch
delete delete delete



