// Declaração de função   (Function hoisting)
falaOi(); // Nao faz diferença se chamar antes de declarar a função
function falaOi() {
    console.log('Oi')
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {             // Pode nomear a função  const souUmDado = function 'nomeDaFuncao'()
    console.log('Sou um dado.');          // Const recebe uma funçao como dado
};


// function executaFuncao(funcao) {
//    funcao();
// } 
// 
// executaFuncao(souUmDado);

// Arrow Function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();


// Dentro de um objeto

const obj = {
    falar() { // falar: function() <- Pode tirar function 
        console.log('Estou falando...');
    }
};

obj.falar();

