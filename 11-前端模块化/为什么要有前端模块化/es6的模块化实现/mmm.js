//1.导入的是{}中定义的变量
// import {flag,sum} from './aaa.js'
//
//
// if(flag){
//   console.log('小红是天才');
//   console.log(sum(40, 50));
// }
//
// //2.直接导入export定义的变量
// import {num1,height} from './aaa.js'
//
// console.log(num1);
// console.log(height);
//
// //3.导入export的function
//
// import {mu1} from './aaa.js';
//
// console.log(mu1(100, 2000));
//
// import {Person} from './aaa.js'
//  const p = new Person();
// p.run()
//
// //4.导入export default中的内容
// import addr from './aaa.js'
//
// addr('sunyuchao');

//5.统一全部导入
import * as aaa from './aaa.js'

console.log(aaa.flag);
console.log(aaa.height);
const p = new aaa.Person();
aaa.default('sunyuchao')




