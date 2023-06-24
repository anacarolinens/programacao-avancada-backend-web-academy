

function dataNativa(){
    
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
  
    console.log(`A hora é: ${hora}:${minutos}:${segundos}`);
}


// setTimeout(dataNativa, 5000)
// setTimeout(dataNativa, 5000)
// setTimeout(dataNativa, 5000)

setInterval(dataNativa, 5000);


