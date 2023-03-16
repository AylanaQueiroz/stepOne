/*
Esse desafio é muito parecido com o anterior, só que a diferença é que eu quero que você 
encontre o maior número não mais entre dois números, mas agora entre três números!

Para isso faça uma função chamada findLargest que recebe como parâmetro três números: 
num1, num2 e num3. A função deve dar um console.log com a frase ‘num1’ is the largest number se o num1 
for o maior número dos três,  ‘num2’ is the largest number se o num2 for o maior número dos três ou 
’num3’ is the largest number se num3 for o maior número entre os três.

(BUG! Existe uma condição que eu não abordei, mas ela pode acontecer, qual é ela e como você resolveria?) 

Para testar seu código:

depois de declarar a função, chame ela passando os seguintes parâmetros, e deve aparecer essa resposta:


TRADUÇOES:

findLargest: encontre o maior

‘num1’is the largest number: num1 é o maior número

‘num2’is the largest number: num2 é o maior número

num1 is equal to num2: num 1 é igual ao num2

*/


// Para testar seu código:
// depois de declarar a função, chame ela passando os seguintes parâmetros, 
// e deve aparecer essa resposta:

let num1=21;
let num2=45;
let num3=13;

function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1>num3) {
        console.log("numero 1 é o maior");
    } else if (num2 > num1 && num2 >num3) {
        console.log("numero 2 é o maior");
    } else if (num3 > num1 && num3>num2) {
        console.log("numero 3 é o maior");
    } else {
        console.log("os números são iguais");
    }
}
 findLargest (21,45,13);
 findLargest (34,18,52);
 findLargest (64,11,11);


/*
console.log(findLargest(21,45,13)); //"45 is the largest number"
console.log(findLargest(34,18,52)); //"52 is the largest number"
console.log(findLargest(64,11,11)); //"64 is the largest number"
*/
