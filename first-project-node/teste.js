const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    if (req.url === '/')
        fs.readFile(caminho, callback)

    else if ( req.url === '/contato')
        return res.end('<h1>pagina contato</h1>')
}).listen(5000, ()=> {
   console.log('Servidor rodando...')
})
