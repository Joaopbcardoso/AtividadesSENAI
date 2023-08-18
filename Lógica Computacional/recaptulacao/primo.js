//segundo número fala até onde calcula
function primo(num){
    var i = 0
    for(var ii = 0; ii <= num; ii++){
        if(num % ii == 0){
            i++
        }
    }
    return i == 2 ? console.log( `${num} true`) : console.log(`${num} false`)
}
primo(7)
primo(10)

 