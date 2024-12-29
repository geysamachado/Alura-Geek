// apps.js

const apiURL = "http://localhost:3000/produtos";

// Obter produtos
async function obterProdutos() {
  const resposta = await fetch(apiURL);
  const produtos = await resposta.json();
  console.log(produtos);
}

// Adicionar produto
async function adicionarProduto(produto) {
  const resposta = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  const novoProduto = await resposta.json();
  console.log(novoProduto);
}

// Exemplo de uso
obterProdutos();

// Adicionar um produto
adicionarProduto({ nome: "Produto 3", valor: 200.0, cep: "45678-123" });
