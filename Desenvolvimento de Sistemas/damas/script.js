let casa, quebraLinha;
let tabuleiro = new Array(8);

// Cria o contêiner do tabuleiro com um id
let container = document.createElement('div');
container.setAttribute('id', 'tabuleiro');
document.body.append(container);

for (let i = 0; i < tabuleiro.length; i++) {
    tabuleiro[i] = new Array(8);
}

for (let i = 0; i < tabuleiro.length; i++) {
    quebraLinha = document.createElement('br');
    container.append(quebraLinha); // Adiciona quebra de linha ao contêiner
    for (let j = 0; j < tabuleiro[i].length; j++) {
        casa = document.createElement('button');
        casa.setAttribute('id', `cs${i}${j}`);
        container.append(casa); // Adiciona o botão ao contêiner
        if (j % 2 == 0 && i % 2 != 0) {
            casa.setAttribute('class', 'cp');
            if (i >= 5) {
                let img = document.createElement('img');
                img.setAttribute('src', 'pecap.png'); // Substitua pelo caminho da imagem do "O"
                img.setAttribute('alt', 'O');
                img.setAttribute('class', 'peca');
                casa.appendChild(img);
            }
            if (i < 3) {
                let img = document.createElement('img');
                img.setAttribute('src', 'pecab.png'); // Substitua pelo caminho da imagem do "X"
                img.setAttribute('alt', 'X');
                img.setAttribute('class', 'peca');
                casa.appendChild(img);
            }
        } else if (j % 2 != 0 && i % 2 == 0) {
            casa.setAttribute('class', 'cp');
            if (i >= 5) {
                let img = document.createElement('img');
                img.setAttribute('src', 'pecap.png'); // Substitua pelo caminho da imagem do "O"
                img.setAttribute('class', 'peca');
                casa.appendChild(img);
            }
            if (i < 3) {
                let img = document.createElement('img');
                img.setAttribute('src', 'pecab.png'); // Substitua pelo caminho da imagem do "X"
                img.setAttribute('class', 'peca');
                casa.appendChild(img);
            }
        } else {
            casa.setAttribute('class', 'cb');
        }
    }
}
