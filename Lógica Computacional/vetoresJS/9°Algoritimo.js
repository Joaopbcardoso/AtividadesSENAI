/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

const metasSemana = []

function editarMetas(){
    metasSemana.push("Fazer curso de backend", "Terminar algoritmos", "Fazer SA")
    if(metasSemana[1] !== "exercício físico"){
        metasSemana[1] = "praticar esportes"
    }
    console.log(metasSemana)
}
editarMetas()