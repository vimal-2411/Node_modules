const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./first.txt','utf8')
const second = readFileSync('./second.txt','utf8')

writeFileSync('./result.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})

console.log('done with this');

console.log('starting the next one');