/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

const numeros = [23, 1, 45, 89, 98, 17, 55, 93, 53, 17 ]

function verificaNum() {
    let numero = prompt("Digite um número")
    for(i = 0; i < numeros.length; i++){
        if(numero == numeros[i]){
            let mensagem = `O numero está na lista nas posições ${i}`
            console.log(mensagem)
        }
    }
}
verificaNum()