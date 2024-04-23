var estoque = {
    Caneta: 0,
    Lapis: 0,
    Borracha: 0,
    Regua: 0,
    Caderno: 0,
    Lapiseira: 0
};




function manipulaDados(operacao) {
    const produto = document.querySelector("[data-contador]");
    const quantidadeAtual = parseInt(produto.value);

    if (!isNaN(quantidadeAtual)) { // Verifica se é um número válido
        if (operacao === '-') {
            produto.value = quantidadeAtual - 1;
        } else if (operacao === '+') {
            produto.value = quantidadeAtual + 1;
        }
    }
}


function updateQuantityInput()   {
    var selectedItem = document.getElementById("itens").value;
    var quantidade = estoque[selectedItem];
    document.getElementById("estoquenumber").value = quantidade;
};


function updateStockFromInput() {
    var selectedItem = document.getElementById("itens").value;
    var novaQuantidade = parseInt(document.getElementById("estoquenumber").value);
    estoque[selectedItem] = novaQuantidade;
    updateQuantityInput();
}
var preco = {
    caneta:5.25,
    lapis: 2.99,
    Borracha: 3.99,
    Regua: 5.50,
    Caderno: 15.50,
    Lapiseira: 22.59,
}

function updatePrice(){
    var dinheiro = preco[selectedItem];
    document.getElementById("quantidade").value = dinheiro;
};


function contaCompras() {
    var selectedItem = document.getElementById("itens").value;
    var novaPreco = parseInt(document.getElementById("valor").value);
    contaCompras();
}




