// Início da nossa tabela de cadastro de produtos
// Giovanni Gasperini - Teste para vaga de Estágio de Desenvolvimento Oak Tecnologia

let produtos = [];

function cadastrarProduto(event) {
    event.preventDefault();


    let nome = document.getElementById("nomeProduto").value;
    let descricao = document.getElementById("descricaoProduto").value;
    let preco = parseFloat(document.getElementById("precoProduto").value);
    let disponivel = document.getElementById("disponivelProduto").value === "sim";


    let produto = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        disponivel: disponivel
    };


    produtos.push(produto);


    document.getElementById("nomeProduto").value = "";
    document.getElementById("descricaoProduto").value = "";
    document.getElementById("precoProduto").value = "";
    document.getElementById("disponivelProduto").value = "sim";

    atualizarTabela();


    document.querySelector("form").style.display = "none";
}

function atualizarTabela() {

    produtos.sort((a, b) => a.preco - b.preco);


    let corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";


    produtos.forEach(produto => {
        let disponibilidade = produto.disponivel ? "Sim" : "Não";
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${disponibilidade}</td>
        `;
        corpoTabela.appendChild(row);
    });
}

function exibirFormulario() {

    document.querySelector("form").style.display = "block";
}

window.onload = atualizarTabela;