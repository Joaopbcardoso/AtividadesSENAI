/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/

const carrinho = []

function editarCarrinho(){
    carrinho.push("camiseta", "calça", "sapato")
    carrinho.shift()
    carrinho[1] = "tênis" 
}
editarCarrinho()
console.log(carrinho)