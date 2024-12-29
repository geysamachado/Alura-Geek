// apps.js

const apiURL = "http://localhost:3000/produtos";

// Função para obter produtos e exibi-los no HTML
async function obterProdutos() {
    try {
        const resposta = await fetch(apiURL);
        const produtos = await resposta.json();

        const listaProdutos = document.getElementById("listaProdutos");
        listaProdutos.innerHTML = ""; // Limpa a lista antes de carregar

        produtos.forEach(produto => {
            const itemProduto = document.createElement("div");
            itemProduto.classList.add("produto-item");
            itemProduto.innerHTML = `
                <p><strong>Nome:</strong> ${produto.nome}</p>
                <p><strong>Valor:</strong> R$ ${produto.valor.toFixed(2)}</p>
                <p><strong>CEP:</strong> ${produto.cep}</p>
            `;
            listaProdutos.appendChild(itemProduto);
        });
    } catch (erro) {
        console.error("Erro ao obter produtos:", erro);
    }
}

// Função para adicionar um novo produto
async function adicionarProduto() {
    const nome = document.getElementById("nomeProduto").value;
    const valor = parseFloat(document.getElementById("valorProduto").value);
    const cep = document.getElementById("cepProduto").value;

    if (!nome || isNaN(valor) || !cep) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    const novoProduto = { nome, valor, cep };

    try {
        const resposta = await fetch(apiURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoProduto),
        });

        if (resposta.ok) {
            alert("Produto adicionado com sucesso!");
            limparCampos();
            obterProdutos(); // Atualiza a lista de produtos
        } else {
            throw new Error("Erro ao adicionar produto.");
        }
    } catch (erro) {
        console.error("Erro ao adicionar produto:", erro);
    }
}

// Função para limpar os campos do formulário
function limparCampos() {
    document.getElementById("nomeProduto").value = "";
    document.getElementById("valorProduto").value = "";
    document.getElementById("cepProduto").value = "";
}

// Carrega os produtos ao abrir a página
document.addEventListener("DOMContentLoaded", obterProdutos);
