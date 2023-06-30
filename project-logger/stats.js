const os = require('os')
const log = require('./logger')

//console.log(os.platform())

setInterval(()=>{
    //desestruração
    const { freemem, totalmem} = os
    //console.log(`Memória livre: ${parseInt(freemem()/1024/1024)} MB, Memória total: ${parseInt(totalmem()/1024/124)}MB`)


    const total = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt(freemem()/1024/1024)
    const usage = 100 - parseInt((freeMem/total)*100)

   // console.log(usage)

    const stats = {
        total: `${total}MB`,
        freeMem: `${freeMem}MB`,
        usage: `${usage}%`
    }
    console.clear()
    console.log('+++++ MEMORY STATS +++++')
    console.table(stats)
    log(`\n${JSON.stringify(stats)}\n`)

}, 1000)

