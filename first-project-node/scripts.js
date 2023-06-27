// //função anonima
// setTimeout(function myFunction(){ //vira uma promisse
//     console.log('Esperando 5 segundo para aparecer')
// }, 5000)
/*
console.log('Quando isso aparece?')

//Arrow function
setTimeout(() => { //lista de argumentos
    console.log('Esperando 5 segundo para aparecer') 
}, 5000);*/

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); 
});*/

/*const fs = require('fs')
console.log('Primeira saída')
fs.readFile('./doc.txt', callback)

//tentar transformar em uma função anônima
function callback(err, conteudo) {
    if(err)
        return console.error(err)
        console.log(String(conteudo))
    
}
console.log('Segunda saída')
console.log('Terceira saída')*/


//calback - é uma função sendo passada/chamada dentro de uma lista de argumentos
//lista de argumentos - isntruções


// function soma(){
//     const resultado = 5 + 56
//     if (resultado === 61)
//         sucesso()
//     else falha()

// }

// function sucesso(){
//     console.log('Sucesso! a soma é 61.')


// }

// function falha(){
//     console.log('Falha! a soma é 61.')


// }

// soma()


// function soma(callbackSucesso, callbackErro){
//     const resultado = 5 + 56
//     if (resultado === 61)
//         callbackSucesso()
//     else callbackErro()

// }


// soma(
//     () =>  {console.log('Sucesso! a soma é 61.')}, 
//     () => {console.log('Falha! a soma é 61.')
// })


//Promisses - (como se fosse literalmente uma promessa para dar certo ou errado) classes que possuiem métodos específicos
//resultado de uma execução for concluido com sucesso ou quando fugir do esperado 

//no construtir, é passada como argumento uma função anônima que possui dois parâmetros:
//resolve - o que vai ser executado quando o resultado não for o esperado;
//reject - o que vai ser executada quando o resultado não for o esperado;

//resolve e reject são metodos que, quando executados, também passam argumenyos que são resolvidos no then e no catch

//promisse serve para tirar de escopo de funções e trazerpara um escopo de um construtor
//callback dentro de callback
//onde eu escrevo é o parâmetro - é o que eu preciso
//argumento é a resposta
// const p = new Promise( (resolve, reject) => {
//     const resultado = 5 + 56
//     if (resultado === 62)
//         resolve('Sucesso! a soma é 61.')
//     else reject('Falha! a soma é 61.')
// })

// p
// .then((mensagem) => {
//     console.log(mensagem)
// })
// .catch((mensagem) => {
//     console.log(mensagem)
// })


//voltando para callback

// const melhorProgamador = 'caroline'

// function oMelhor(calback, callbackErro) {
//     if(melhorProgamador == 'Ana') {
//         calback({
//             nome: melhorProgamador,
//             mensagem: 'A melhor!'
//         })

//     }else {
//         callbackErro({
//             mensagem01: 'Errado!',
//             mensagem02: melhorProgamador + ' sério? '
//         })
//     }
// }

// oMelhor((objeto) => {
//     console.log(objeto.nome + ' é ' + objeto.mensagem)

// },
//         (objeto) => {
//     console.log(objeto.mensagem02 + objeto.mensagem01)
// })


//Desafio: Transformar o código acima para promise
const a = new Promise ((resolve, reject) => {
    const melhorProgamador = 'Ana'
    if(melhorProgamador === 'Ana') {
        resolve({
            nome: melhorProgamador,
            mensagem: 'A melhor!'
        })

    }else reject ({
            mensagem01: 'Errado!',
            mensagem02: melhorProgamador + ' sério? '
        })
})

a.then ((objeto) => {
    console.log(objeto.nome + ' é ' + objeto.mensagem)

})
.catch((objeto) => {
    console.log(objeto.mensagem02 + objeto.mensagem01)
})