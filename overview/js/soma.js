 function soma() {
    let numero = 23;
    if (typeof(numero) === "number") {
        return numero + 2;
    } else {
        return "Não dá pra somar...";
    }
}

console.log(soma())

module.exports = {
    soma: soma,
  };