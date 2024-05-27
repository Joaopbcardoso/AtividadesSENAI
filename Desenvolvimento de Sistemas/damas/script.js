let casa, quebraLinha, pecap, pecab
let tabuleiro = new Array(8)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(8)
}
for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
        //console.log(`tab ${i} ${j}`)
        casa = document.createElement('button')
        casa.setAttribute('id', `cs${i}${j}`)
        document.body.append(casa)
        if(j % 2 == 0 && i % 2 != 0){
            casa.setAttribute('class', 'cp')
            if(i>=5){
                casa.innerText = "O"
            }
            if(i < 3 ){
                casa.innerText = "x"
            }
        }
        else if(j % 2 != 0 && i % 2 == 0){
            casa.setAttribute('class', 'cp')
            if(i>=5){
                
                casa.innerText = "O"
            }
            if(i < 3 ){
                casa.innerText = "x"
            }
        }
        else{
            casa.setAttribute('class', 'cb')
        }
    }
}
