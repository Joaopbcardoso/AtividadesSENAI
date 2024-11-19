/*
Uma loja precisa atualizar seu sistema de controle de estoque.
Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato". 
Adicione o produto "meia" ao final da lista. Remova o primeiro produto da lista e mude
o segundo produto para "bermuda". Imprima o estoque atualizado no final.
*/


const estoqueProdutos = []


function atualizaEstoque(){
    estoqueProdutos.push("camiseta")
    estoqueProdutos.push("calça")
    estoqueProdutos.push("sapato")
    estoqueProdutos.shift()
    estoqueProdutos.push("bermuda")
    estoqueProdutos[1] = "meia" 
    console.log(estoqueProdutos);
}
atualizaEstoque()