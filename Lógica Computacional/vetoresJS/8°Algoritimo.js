/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

const tarefasLimpeza = []

function criarTarefas(){
    for(i = 0; i < 4; i++){
        let mensagem = `Digite a ${i+1}º tarefa`
        let novatarefa = prompt(mensagem)
        tarefasLimpeza.push(novatarefa)
    }
    tarefasLimpeza.slice[2,1]
    tarefasLimpeza[1] = "limpar banheiro"
    console.log(tarefasLimpeza)
}
criarTarefas()