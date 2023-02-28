// alguns metodos de array 

//concat() --> juntar arrays

const array = [1, 2, 3, 4, 5, 6];
const array2 = [2, 7, 9];
const array3 = array.concat(array2)

console.log(array3) //[1, 2, 3, 4, 5, 6, 2, 7, 9]


// filter() --> Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
const filterArray = array3.filter(num => num > 5);
console.log(filterArray) // [6, 7, 9]


//find() --> Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste
const findArray = array3.find(num => num > 6);
console.log(findArray) // 7


//findIndex --> Funciona igual o find(), mas retorna o índice em vez do elemento
const findIndex = array3.findIndex(num => num == 5);
console.log(findIndex) // 4

//lastIndexOf() --> É igual o findIndex() porém começa do último elemento, não no primeiro.
const lastIndex = array3.lastIndexOf(5);
console.log(lastIndex) // 4


const name = 'Carlos'

console.log(name.lastIndexOf('r')); // 2

// forEach() --> Executa uma função em cada elemento do array de forma individual.
array3.forEach(num => console.log(num + 1));


//pop() --> Adiciona o elemento passado como parâmetro do array, porém na última posição.

//shift() --> Retira o primeiro elemento do array.

//unshift() --> Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.


//reduce() --> Utiliza uma função definida pelo usuário em cada um dos elementos, 
// guardando o resultado em uma variável que pode ser acessada dentro da função 
// que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
const array4 = [1, 3, 5, 7, 9];

const valorInicial = 0;
const somaComInicial = array4.reduce((acumulador, valorAtual) => acumulador + valorAtual, valorInicial);

console.log(somaComInicial); // 0 + 1 + 3 + 5 + 7 + 9  ==>  25


//reversee() --> Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.


//slice() --> Copia uma parte do array para outro array.

// sort() --> Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona 
// corretamente para números, onde temos que definir uma função que irá auxiliar o comando.


//splice() --> Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e 
// incluir um ou mais elementos a partir de um índice escolhido.