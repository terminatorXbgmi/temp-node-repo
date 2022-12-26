//  const _ = require('lodash');

//  const items = [1 , [2 , [3,[5]]]]

//  const newitems = _.flattenDeep(items);
//  console.log(newitems);

// started opeerating system process
//  console.log("hello world")

//  setTimeout(() => {
//     console.log('hello usa')
//  }, 1);
// setInterval(() => {
//     console.log("hello world");
// },1000);  // 

//  console.log("hello world 1")
 // cpmp;eted

//  const http = require('http');
//  const server = http.createServer((req,res)=>{
//   if(req.url === '/'){
//     res.end('home page')
//   }
//   if(req.url === '/about'){

//     // blocking code is the 2 nested for loop
//     res.end('about page')
//   }
//   res.end('hello')
 
//  })
 
//  server.listen(5000 , ()=>{
//     console.log('server listening  on port :5000....')
//  })

/************************************************** */
/* this is one method  */

// const {readFile , writeFile} = require('fs');
// // const { reject, result } = require('lodash');
// // const { resolve } = require('path');
// const util  = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// const start  = async() =>{
//   try {
//     const first = await readFilePromise('./content/first.txt' , 'utf8')
//     const second = await readFilePromise('./content/second.txt' , 'utf8')
//     await writeFilePromise('./content/result-mind-grenade.txt' , `THIS is awesome :) : ${first} ${second}` )
//     console.log(first , second)
    
//   } catch (error) {
//     console.log(error)
//   }
  
// }

// start()

/***************************************************/


/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--> this is also a another method   <--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

const {readFile , writeFile} = require('fs').promises;
// const { reject, result } = require('lodash');
// const { resolve } = require('path');
// const util  = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
const start  = async() =>{
  try {
    const first = await readFile('./content/first.txt' , 'utf8')
    const second = await readFile('./content/second.txt' , 'utf8')
    await writeFile('./content/result-mind-grenade.txt' , `THIS is awesome :) : ${first} ${second}` )
    console.log(first , second)
    
  } catch (error) {
    console.log(error)
  }
  
}

start()




/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/









// getText('./content/first.txt')
// .then( (result) => console.log(result) )
// .catch( (err) => console.log(err))


// const getText = (path)=>{
//   return new Promise ((resolve , reject)=>{

//     readFile(path , 'utf8' ,(err,data)=>{
//       if(err){
//         reject(err)
//       }
//       else{
//        resolve(data)
//       }
//     })

//   })
// }