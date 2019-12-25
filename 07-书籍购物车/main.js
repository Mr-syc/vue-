const App = new Vue({
  el:'#App',
  data:{
    books:[
      {
        id:1,
        name:'《计算导论》',
        data:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        data:'2006-2',
        price:59.00,
        count:1
      },
      {
        id:3,
        name:'《数据结构》',
        data:'2006-3',
        price:68.00,
        count:1
      },
      {
        id:4,
        name:'《操作系统》',
        data:'2006-6',
        price:108.00,
        count:1
      }
    ]
  },
  methods:{
    btnAddClick(index){
      this.books[index].count++;
      console.log('add' ,index);
    },
    btnSubClick(index){
      this.books[index].count--;
      console.log('sub',index);
    },
    removeHandle(index){
      this.books.splice(index,1);
    }
    },
  computed:{
    totalPrice(){
      //let result=0;
      //1.普通for循环
      // for(let i=0;i<this.books.length;i++){
      //   result += this.books[i].price * this.books[i].count;
      // }
      // return result

      //2.for(let i in this.books)
      // for(let i in this.books){
      //   result += this.books[i].price * this.books[i].count;
      // }
      // return result;

      //3.for(let i of this.books)
      // for(let i of this.books){
      //   result += i.price * i.count;
      // }
      // return result;

      //4.reduce
      return this.books.reduce(function (pre ,book) {
        return pre+book.count*book.price;
      },0);

    }
  },
  filters:{
    showPrice(price) {
      return "￥" + price.toFixed(2)

    }
  }
})


//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）

// filter/map/reduce

// 1.filter函数的使用--取出100所有小于100的数字
//filter中的回调函数有一个要求：必须返回一个boolean值
//true:当返回true的时候，函数内部会自动将这次回调函数的n加入到新的数组中
//false:当返回到false的时候，函数内部会自动过滤掉这次n
//  const nums = [10,20,30,40,111,222,50,40]
// //函数式编程
// let total = nums.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre+n);
//
// // let total = nums.filter(function (n) {
// //   return n<100
// // }).map(function (n) {
// //   return n*2
// // }).reduce(function (preValue,n) {
// //   return preValue+n;
// // },0);
//
// console.log(total);

// let newNums = nums.filter(function (n) {
//   return n<100
// })
// console.log(newNums);
//
// // 2.map函数的使用---将所有小于100的数字进行转化：全部*2
// let newNums2=newNums.map(function (n) {
//   return n*2
// })
// console.log(newNums2);
//
// //3.reduce函数的使用---将newNum2所有数字相加得到结果
// //作用：对数组中的所有内容进行汇总
// let total= newNums2.reduce(function (preValue,n) {
//   return preValue + n;
// },0)
// console.log(total);
//
// //reduce函数的第二个参数0是preValue的初始化值


//1.取出100所有小于100的数字
// let newNum=[]
// for(let n of nums){
//   if(n<100){
//     newNum.push(n)
//   }
// }
//
// // 2.将所有小于100的数字进行转化：全部*2
// let newNum2=[]
// for(let n of newNum2){
//   newNum2.push(n*2)
// }
//
// console.log(newNum2);
//
// //3.将newNum2所有数字相加得到结果
// let total=0;
// for(let n in newNum2){
//   total += n;
// }
// console.log(total);
