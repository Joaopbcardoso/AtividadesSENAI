var estoque = {
    Caneta: 0,
    Lapis: 0,
    Borracha: 0,
    Regua: 0,
    Caderno: 0,
    Lapiseira: 0
};

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




