const EventEmmiter = require('events')
const fs = require('fs')
const path = require('path')

const emmiter = new EventEmmiter()

//toda vez que escutar o log, adiciona esse log na mensagem de texto
emmiter.on('log', (mensagem) => { // quem escuta o que o foi gritado
    fs.appendFile(path.join(__dirname, 'log.txt'), mensagem, (err) => { // mesma pasta desse documento que está
        if (err) throw err
    })
    
    console.log('Rodando')
})

function log(mensagem) {
    emmiter.emit('log', mensagem)
}

module.exports = log

log('um log qualquer...') //quem grita
//toda vez que escuta a palavra log é executada a função
log('outro log qualquer...')