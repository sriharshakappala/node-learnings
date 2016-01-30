// var currency = require('./currency');
var currency = require('currency');

console.log('50 Canadian dollars to US dollars = ');
console.log(currency.canadianToUs(50));

console.log('30 US dollars to Canadian dollars = ');
console.log(currency.usToCanadian(30));

// By default checks with the node_modules folder.
