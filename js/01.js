let n1 = 38.22;
let n2 = 39.88;
console.log(n1);
console.log(n2);

//pegar a parte inteira do número
console.log(parseInt(n1));
console.log(parseInt(n2));

//pegar o número completo
console.log(parseFloat(n1));
console.log(parseFloat(n2));

//arredondamento para o próximo inteiro
console.log(Math.ceil(n1));

//arredondamento para o mesmo inteiro
console.log(Math.floor(n1));

//arredondamento conforme o valor decimal

//valor decimal entre 50 e 99 - próximo inteiro
console.log(Math.round(n2));

//valor decimal entre 1 e 49 - mesmo inteiro
console.log(Math.round(n1));

//sorteio de número entre 0 e 1
let sorteio = Math.random();
console.log(sorteio);

//definir número de decimais
console.log(sorteio.toFixed(2));

// deixar apenas com a parte inteira
console.log(parseInt(sorteio * 100));
