function listadepares(num){
    var pares = [0]
    for( i = 1;i <= num; i++){
        if(i % 2 === 0)
        pares.push(i)
    }
    return(pares)
}
console.log(listadepares(12))