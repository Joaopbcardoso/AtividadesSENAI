/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

const listaCompras = []


function createLista(){
    let novoItem
    for(i = 0; i < 3; i++){
        novoItem = prompt("Digite um produto")
        listaCompras.push(novoItem)        
    }
    if(listaCompras[listaCompras.length - 1] !== "leite"){
        listaCompras.push("leite")
    }
    console.log(listaCompras)
}
createLista()

