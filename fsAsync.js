const {readFile, writeFile } = require('fs')

console.log('start');
readFile('./first.txt','utf8',(err,result)=>{
    if(err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./second.txt','utf8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './resultAsync.txt',
            `here result: ${first}, ${second}`,
        (err,result) =>{
            if(err){
                console.log(err)
                return
            }
                console.log('done with this task');
        })
    })
})
console.log('starting the new task');