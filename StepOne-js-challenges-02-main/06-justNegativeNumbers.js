// Faça uma função chamada justNegativeNumbers que receba um número e 
// retorne apenas números negativos. Se o número for zero, retorne apenas zero.


let num = [7, 0, 6, -8]
let resultado = []

//function justNegativeNumbers (num){

for (i = 0; i < num.length; i++) {

    if (num[i] <= 0) {

        resultado.push(num[i])
    }
}




console.log(resultado)



















/*

num = 3

function justNegativeNumbers(num) {
    
    if (num < 0) {
       
        return num 
    } else  {
        return num*-1 
    }

    
}

console.log (justNegativeNumbers(num)) 



// ________________________ TEST ________________________
console.log('TEST:');
const exampleNumber1 = -2;
const exampleNumber2 = 4;
const exampleNumber3 = 0;
if (justNegativeNumbers(exampleNumber1) === -2 && justNegativeNumbers(exampleNumber2) === -4 && justNegativeNumbers(exampleNumber3) === 0) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________
*/