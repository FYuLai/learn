- 小程序为什么要框架？
  原生写小程序  有组件化 语法好怪 Vue react开发者， 学习成本高
  taro(react)  mpvue(vue) 开发者不用学小程序就可以写了
  命令行工具 安装一堆的各种npm  极大的扩展了小程序的功能
  compile src => dist/ 


  -JSX 
  XML in JS, react template 的新语法
  JSX-> babel  ->preset react  -> JS 
  render (
    {
    return(

    )

    
  }
  react 没有v-for v-if 指令
  原生写
  <view>
  {
    this.data.list.map((item,index) =>{
      return (
        ....
      )
    })
  }
  </view>