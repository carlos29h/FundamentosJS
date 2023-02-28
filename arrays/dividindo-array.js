// vamos dividir um array em 2 arrays

const alunos = [
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

//slice() nao altera o valor original entao tem que criar uma nova consta array
// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10);

//ou desta forma para que vc nao precise contar 
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);


console.log(sala1);
console.log(sala2);
