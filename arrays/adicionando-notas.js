// utilizando métodos de array para addicionar dados no final de um array
const notas = [10, 6.5, 8, 7.5];
//
notas.push(8.5);
//
const media2 = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 4;

console.log(media2);

console.log(notas); // [10, 6.5, 8, 7.5, 8.5]
