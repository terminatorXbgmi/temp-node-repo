const EventEmitter  = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response' , (name , id) =>{  // here response is a string we desire to pass
  console.log(`data recievd ${name} with id: ${id}`)
})

customEmitter.on('response' , () =>{  // here response is a string we desire to pass
  console.log(`some other logic here`)
})


customEmitter.emit('response' , 'jhon' ,34)
// here string should match