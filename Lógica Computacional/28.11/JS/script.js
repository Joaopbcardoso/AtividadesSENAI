
function verificaTabuada(){
    const numeroDigitado = document.getElementById("num").value
    var numeroDigitado2 = parseInt(numeroDigitado)

    if(numeroDigitado2 % 1 == 0 && numeroDigitado2<=10){
        var img1 = document.getElementById("cor1");
        img1.setAttribute('src','./img/cor1.png')
    }
    else{
        var img1 = document.getElementById("cor1");
        img1.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 2 == 0 && numeroDigitado2<=20){
        var img2 = document.getElementById("cor2");
        img2.setAttribute('src','./img/cor2.png')
    }
    else{
        var img2 = document.getElementById("cor2");
        img2.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 3 == 0 && numeroDigitado2<=30){
        var img3 = document.getElementById("cor3");
        img3.setAttribute('src','./img/cor3.png')
    }
    else{
        var img3 = document.getElementById("cor3");
        img3.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 4 == 0 && numeroDigitado2<=40){
        var img4 = document.getElementById("cor4");
        img4.setAttribute('src','./img/cor4.png')
    }
    else{
        var img4 = document.getElementById("cor4");
        img4.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 5 == 0 && numeroDigitado2<=50){
        var img5 = document.getElementById("cor5");
        img5.setAttribute('src','./img/cor5.png')
    }
    else{
        var img5 = document.getElementById("cor5");
        img5.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 6 == 0 && numeroDigitado2<=60){
        var img6 = document.getElementById("cor6");
        img6.setAttribute('src','./img/cor6.png')
    }
    else{
        var img6 = document.getElementById("cor6");
        img6.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 7 == 0 && numeroDigitado2<=70){
        var img7 = document.getElementById("cor7");
        img7.setAttribute('src','./img/cor7.png')
    }
    else{
        var img7 = document.getElementById("cor7");
        img7.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 8 == 0 && numeroDigitado2<=80){
        var img8 = document.getElementById("cor8");
        img8.setAttribute('src','./img/cor6.png')
    }
    else{
        var img8 = document.getElementById("cor8");
        img8.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 9 == 0 && numeroDigitado2<=90){
        var img9 = document.getElementById("cor9");
        img9.setAttribute('src','./img/cor9.png')
    }
    else{
        var img9 = document.getElementById("cor9");
        img9.setAttribute('src','./img/semcor.png')
    }

    if(numeroDigitado2 % 10 == 0 && numeroDigitado2<=100){
        var img10 = document.getElementById("cor10");
        img10.setAttribute('src','./img/cor10.png')
    }
    else{
        var img10 = document.getElementById("cor10");
        img10.setAttribute('src','./img/semcor.png')
    }
}

function geraNumero(){
    return Math.floor(Math.random() * 100) + 1;
}
function mostraValor(){
    const locNumero = document.getElementById("numero-aleatorio")
    locNumero.textContent = geraNumero()
}










