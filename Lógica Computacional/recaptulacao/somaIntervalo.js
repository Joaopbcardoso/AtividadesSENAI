function somaNoIntervalo(start, end){
    var result = 0
    for(var i = end; i > start; i--){
        if(i % 2 == 0){
            result += i
        }
    } return(result)
}
console.log(somaNoIntervalo(1,10))