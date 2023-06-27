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


function soma(callbackSucesso, callbackErro){
    const resultado = 5 + 56
    if (resultado === 61)
        callbackSucesso()
    else callbackErro()

}


soma(
    () =>  {console.log('Sucesso! a soma é 61.')}, 
    () => {console.log('Falha! a soma é 61.')
})
