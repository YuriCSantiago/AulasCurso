// Escreva uma funçao chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne trie se a imagem estiver no modo paisagem

// function ePaisagem (largura, altura) {
//    return largura > altura // ? true : false;
// }

// console.log(ePaisagem(1920, 1080));


// Reescrevendo acima

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));