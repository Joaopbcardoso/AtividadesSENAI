function fatorial(num){
    var result = 0
    if(num <= 0){
        result = 1
        return(result)
    } else{
        for(var next = num - 1; next >= 1; next--){
            num = num * next 
        }
    } return(num)
}
console.log(fatorial(5))
