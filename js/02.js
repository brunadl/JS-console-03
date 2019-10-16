//let numeros = new Array();
let numeros = [1,2,4,5,6,7,8,9,12,11,44,32,34,5,6];
console.log(numeros);
console.log(numeros[5]);

//quantidade de elementos do Array
console.log(numeros.length);

let pessoas = ['João','Maria','Pedro','Thomas','Adriana'];
console.log(pessoas);

let coisas = [23,'Carla',true, 456.8, 'mesa'];
console.log(coisas);

//inserir diretamente no array
//insere um novo elemento no array que ocupará o última índice
pessoas.push('Catarina');
console.log(pessoas);

//insere um novo elemento no array que ocupará o primeiro índice
pessoas.unshift('Tamires');
console.log(pessoas);

//retirar elementos do array
// retirar o último elemento do array
let saiu1 = pessoas.pop()
console.log(pessoas);
console.log("Ela está aqui: " + saiu1);

//retira o primeiro elemento do array
let saiu2 = pessoas.shift()
console.log(pessoas);
console.log("Ela está aqui: " + saiu2);

//ordem alfabética
console.log(pessoas.sort());

//ordem alfabética - inversa
console.log(pessoas.reverse());


console.log(numeros.sort());
console.log(numeros.reverse());

// Criar uma função que determina a ordem de classificação. A função deve retornar um valor negativo, ou zero ou um valor positivo, para isso usamos os argumentos para a seguinte função: function(a,b){return a-b} - Quando o método sort compara dois valores, ele envia parÂmetros para a função de comparação e classifica os  valores de acordo com o retorno. Exemplo: comparando 20 e 40 o método sorte chama a função comparativa (20,40) - É feito o calculo de 20-40. Como nesse caso o resultado -20 a função classifica 20 como um valor menor do que 40;

numeros.sort(function(n1,n2){return n1-n2});
console.log(numeros);


let cidades = ['Londres','Madri','Buenos Aires','Roma'];
let comidas = ['Peixe com batata','Paella','Ancho','Pasta'];

//forma antiga
let antigo = cidades.concat(comidas);
console.log(antigo);

// forma nova
let novo = [].concat(cidades, comidas, numeros);
console.log(novo);

//spread operador(...) quebrar o array em argumentos
let novo2 = [...cidades, ...comidas];
console.log(novo2);

let novaComida = 'Churrasco';
let novo3 = [].concat(comidas, novaComida);
console.log(novo3);

let novo4 =[...comidas, ...novaComida];
console.log(novo4);


// let numero = parseInt(prompt("Digite um número qualquer"));
// console.log(numero);
// // numeros = [].concat(numeros, numero)
// numeros.push(numero);
// console.log(numeros);


let numero = parseInt(prompt("Digite um número qualquer"));
let total = 0;
let indice = [];
let novosNumeros = [];
for (let i = 0; i < 19; i++) {
  novosNumeros[i] = parseInt(Math.random()*3);
  if (novosNumeros[i] == numero) {
    total++;
    indice.push(i);
  }
  console.log('Numero sorteado= ' + novosNumeros[i] );
}
  console.log('Foram encontrados: ' + total + ' números no Array');
  console.log('Os números estão nos seguintes índices: ' + indice);
