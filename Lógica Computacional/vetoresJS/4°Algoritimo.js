/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

const tarefas = []

function editaTarefas(){
    for(i = 0; i < 3; i++){
        let mensagem = `Digite a ${i+1}º tarefa`
        let novaTarefa = prompt(mensagem)
        tarefas.push(novaTarefa)
    }
    tarefas.slice(1,1)
    tarefas.push("ligar para o médico")
    console.log(tarefas)
}
editaTarefas()