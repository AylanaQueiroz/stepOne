/* 
Nesse exercício vamos treinar operadores de comparação!
Para isso eu quero que você complete com o operador 
certo dentro de cada console:
substitua o __ pelos operadores: ==, ===, <, <=, >, >= 
Todos os consoles tem que dar 'true'
*/

let userAge = 25;
let userHeight = 110;

console.log(22 __ 21);
console.log(21 __ 22);
console.log(5 __ 5);
console.log('5' __ 5);
console.log(userAge __ 18); // a idade do usuário precisa ser maior ou igual a 18 para poder abrir uma conta
console.log(userHeight __ 120); // a altura do usuário precisa ser menor ou igual a 120cm para poder ir no brinquedo


let userAge=25;
let userHeight=110;
console.log (userAge != userHeight);


let userAge=21;
let userHeight=22;
console.log ( userAge <= userAge);


let userAge=5;
let userHeight=5;
console.log (userAge === userHeight);


let userAge='5';
let userHeight=5;
console.log (userAge==userHeight)

let Age=25;
let userHeight=18;
console.log(Age>=userHeight)

let userHeight=120;
let height=110;
console.log (userHeight>=height)





