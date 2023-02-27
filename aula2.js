
//Padrão de nomes
//camelCase : Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula
//snake_case: Os espaços são substituídos pelo caractere _ (underline) => minha_variavel
//kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var
// PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar
//

/* const myName = "5";
const num = 5;


console.log(myName[0].toUpperCase() + myName.slice(1, 6));

console.log(myName == num); // true
console.log(myName === num); // true
console.log(null === undefined); // false

console.log(typeof myName);
console.log(typeof num);

**/

const idadeMinima = 18;
const idadeCliente = 19;

// if (idadeCliente >= idadeMinima) {
//     console.log("cerveja")
// } else {
//     console.log("suco")
// }

//fazendo a condição acima somente no console.log

console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
