function marcaCasa(nomeBotao){
    if(jogada % 2 == 0){
        document.getElementById(nomeBotao).innerText = "O"
       document.getElementById(nomeBotao).style.color = "red"
    }else{ document.getElementById(nomeBotao).innerText = "X"
    document.getElementById(nomeBotao).style.color = "blue"
    }
    document.getElementById(nomeBotao).disabled = true
    let line= nomeBotao.charAt(2)
    let column= nomeBotao.charAt(3)
    alert(line+""+column)
    jogada ++
    if(jogada >= 5){
        encerrarjogo()
    }
    if(jogada > 9){
        alert("Deu velha")
    }
}
function marca(linha, coluna){
    marcaCasa("bt"+linha+""+coluna)
}

function encerrarjogo() {
const tamanho = 3;
let vencedor = null;

for (let i = 0; i < tamanho; i++) {
    if (document.getElementById(`bt${i}0`).innerText === document.getElementById(`bt${i}1`).innerText &&
        document.getElementById(`bt${i}1`).innerText === document.getElementById(`bt${i}2`).innerText &&
        document.getElementById(`bt${i}0`).innerText !== "") {
        vencedor = document.getElementById(`bt${i}0`).innerText;
    }
    if (document.getElementById(`bt0${i}`).innerText === document.getElementById(`bt1${i}`).innerText &&
        document.getElementById(`bt1${i}`).innerText === document.getElementById(`bt2${i}`).innerText &&
        document.getElementById(`bt0${i}`).innerText !== "") {
        vencedor = document.getElementById(`bt0${i}`).innerText;
    }
}

if (document.getElementById("bt00").innerText === document.getElementById("bt11").innerText &&
    document.getElementById("bt11").innerText === document.getElementById("bt22").innerText &&
    document.getElementById("bt00").innerText !== "") {
    vencedor = document.getElementById("bt00").innerText;
}
if (document.getElementById("bt02").innerText === document.getElementById("bt11").innerText &&
    document.getElementById("bt11").innerText === document.getElementById("bt20").innerText &&
    document.getElementById("bt02").innerText !== "") {
    vencedor = document.getElementById("bt02").innerText;
}

if (vencedor) {
    alert(`Jogo finalizado!\nVencedor: ${vencedor}`);
}
}
    