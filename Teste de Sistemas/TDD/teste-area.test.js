teste('testa se está calculando a área corretamente', ()=>{
    const entrada = {
        altura: 10,
        largura: 20,
        raio: null
    }
    const saida_esperada_quadrado = 200
    const saida_esperada_triangulo = 100
    const saida_esperada_circulo = null


    expect(calculaArea(entrada, 'quadrado')).toEqual(saida_esperada_quadrado)
    expect(calculaArea(entrada, 'triangulo')).toEqual(saida_esperada_triangulo)
    expect(calculaArea(entrada, 'circulo')).toEqual(saida_esperada_circulo)
})