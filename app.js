 const _ = require('lodash');

 const items = [1 , [2 , [3,[5]]]]

 const newitems = _.flattenDeep(items);
 console.log(newitems);