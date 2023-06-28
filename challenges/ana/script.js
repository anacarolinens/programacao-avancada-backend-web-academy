const userList = document.getElementById("list");

// Faz uma requisição para obter os dados
fetch("http://jsonplaceholder.typicode.com/users")
  .then(response => {
     // Verificando se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error("Erro ao carregar os usuários.");
    }
    // Convertendo a resposta para JSON e o retorna em seguida
    return response.json();
  })
  // Mapeiando os dados do vetor
  .then(dados => {
    const lista = dados.map(user => ({
      name: user.name,
      email: user.email.toLowerCase() //colocar  os emails todos em letra minuscula
    }));

    // Criando uma lista HTML com os nomes e e-mails dos usuários e a atribui à propriedade 
    //innerHTML do elemento userList
    userList.innerHTML = lista.map(user => 
        `<li> Nome: ${user.name} </br> Email: ${user.email}</li> </br></br>`).join('');
  })
  .catch(error => {
    // Se der um erro, exibe uma mensagem de erro na lista
    userList.innerHTML = `<li>Erro: ${error.message}</li>`;
  });