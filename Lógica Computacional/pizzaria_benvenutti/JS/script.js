


const products = [
    {
        
      img: "./img/pizza-calabresa.png",
      produto: "Pizza de Calabreza",
      preco: "",
    },

    {
      
      img: "./img/pizza-frango-catupiry.png",
      produto: "Pizza de Frango com Caupiry",
      preco: "",
    },

    {
      img: "./img/pizza-4queijos.png",
      produto: "Pizza de Quatro Queijos",
      preco: "",

    },
    {
      img: "./img/pizza-lombinho.png",
      produto: "Pizza de Lombinho",
      preco: "",
    }
]

// Itere sobre o array de produtos e crie uma lista HTML para cada produto
function createMenuList() {
    // Limpe a lista de produtos
    const menuList = document.querySelector(".menu-pizzaria");
    menuList.innerHTML = "";
  
    // Itere sobre a lista de produtos
    products.forEach((product) => {
      // Crie um elemento HTML para o produto
      const produtoItem = document.createElement("li");
      produtoItem.classList.add("menu-item");
  
  
      // Adicione a imagem do produto à lista
      const productImage = document.createElement("img");
      productImage.src = product.img;
      produtoItem.appendChild(productImage);

      // Adicione o nome do produto à lista
      const productName = document.createElement("h3");
      productName.textContent = product.produto;
      produtoItem.appendChild(productName);
  
      // Adicione o preço do produto à lista
      const productPrice = document.createElement("b");
      productPrice.textContent = product.preco;
      produtoItem.appendChild(productPrice);

      const quantidade = document.createElement("input")
      quantidade.type = "number"
      produtoItem.appendChild(quantidade)

      const addCarrinho = document.createElement("button")
      addCarrinho.innerHTML = "Adicionar ao Carrinho"
      produtoItem.appendChild(addCarrinho)

      // Adicione o elemento HTML à lista de produtos
      menuList.appendChild(produtoItem);
    });
  }

  createMenuList()

const pagBroto = document.querySelector("./broto.html")
const pagMedia = document.querySelector("./medias.html")
const pagGrande = document.querySelector("./grandes.html")



  function tamanhoPreco(){
    if(pagMedia){
      products.preco = "R$30,00"
    }
    produtoItem.appendChild(productPrice)
  }


  

