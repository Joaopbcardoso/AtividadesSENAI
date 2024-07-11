const fibonacci = require("./fibonacci")

test('este teste deve retornar a quantidade de números da sequência que foi digitada', ()=>{
    const entrada = 5
    const saida_esperada = [ 0, 1, 1, 2, 3 ]
    expect(fibonacci(entrada)).toEqual(saida_esperada)
})

test('este teste deve retornar a quantidade errada de números da sequência que foi digitada', ()=>{
    const entrada = 6
    const saida_esperada = [ 0, 1, 1, 2, 3 ]
    expect(fibonacci(entrada)).toEqual(saida_esperada)
})