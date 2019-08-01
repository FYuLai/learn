// function Person (name){
//   this.name= name
//   return  {}
// }
// let p = new Person('wn')
// console.log(p)
// ------------------- 构造函数不需要返回值使用new 来创建对象，如果return 的是非对象会忽略返回值
// 如果是return对象 则返回该对象 若return null 忽略返回值 
// 1. p.__proto__  等于？ Person.prototype
// 2. Person.__proto__ = Function.prototype
// 实例的__proto__ 等于其构造函数的prototype
// var foo = {},
//   F = function (){};

// Object.prototype.a ='valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)

// console.log(F.a)
// console.log(F.b)


// function Person (name){
//   this.name= name
  
// }
// function Student (){

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student
// let s = new Student('wn')
// console.log(s instanceof Person)
// for (let i = 0; i<10; i++){
//  setTimeout(()=>{
//   console.log(i)
//  },3000)
// }
// ------------------let 每次循坏会生成一个封闭的作用域和setTimeout绑定 而var 每次循坏会覆盖掉上一次多的作用域
// for (var i = 0; i < 10; i++){
//   (function(i){
//     setTimeout(()=>{
//       console.log(i)
//      },0)
//   })(i)
 
//  }
 // -------------------------------------------------------for in   for of
 Array.prototype.method = function(){
   console.log('wn')
 }
 
 var myArray = [1,2,3,4,5,6,7]
 for (let index of myArray){
   console.log(index)
 }
// for in 
// 1. index 索引为字符串型数字，不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
// for...in 循环只遍历可枚举属性 包括原型链 所以for in更适合遍历对象
// for of 
// 1. for in遍历的是数组的索引 for of 遍历的是数组的元素
// for of 遍历的只是数组内的元素  不包括数组原型属性和索引

// -------------------------
let gArr = [1,2,[3,4],5,[2,7,[3,9]]]
//  [1,2,3,4,5,2,7,3,9]
// function outputArr(arr) {
//   let res = []
//   for (let i = 0; i< arr.length;i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(outputArr(arr[i]))
//     }else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }
// console.log(outputArr(gArr))
function outputArr(arr) {
  return arr.reduce(function(pre,item){
    return pre.concat(Array.isArray(item) ? outputArr(item): item)
  },[])
}
 console.log(outputArr(gArr))