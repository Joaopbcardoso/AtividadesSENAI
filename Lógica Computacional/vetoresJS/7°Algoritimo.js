/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/

const exerciciosSemana = ["corrida", "flexões", "abdominais"]

function verificarLista(){
    if(exerciciosSemana[exerciciosSemana.length - 1] !== "alongamento"){
        exerciciosSemana.push("alongamento")
    }
    console.log(exerciciosSemana)
}
verificarLista()

