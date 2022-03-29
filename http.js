const http = require ('http')

const server = http.createServer((req,res)=>
{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here about our History')
    }
    res.end()
})

server.listen(8080)