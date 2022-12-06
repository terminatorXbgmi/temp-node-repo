// setInterval(() => {
//     console.log("hello world");
// },1000);
// const jhon  = 'jhon'
// const peter  = 'peter'

// const sayhi = (name) =>{
//      console.log('hello there ' + name )
// }

const names = require('./2-module')
const sayhi  = require('./5')

 sayhi(names.jhon)
 sayhi(names.peter)
// sayhi('shasi')
// sayhi(jhon)
// sayhi(peter)
// console.log(module);
