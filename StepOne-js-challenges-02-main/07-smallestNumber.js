/*// O menor número. Crie uma função que recebe um array de números como parâmetro 
// de entrada e retorna o menor número do array.
*/

const exampleArray = [-2, 0, 5, 9, 120, -60];



function smallestNumber(array) {
    
    let smallest = 0

    for (let i=0; i < array.length; i++){

        const currentNumber= array[i]

        if (currentNumber < smallest){
            smallest = currentNumber
        }

    console.log(smallest)
    }
}




// ________________________ TEST ________________________
console.log('TESTS:')
if(smallestNumber(exampleArray) == -60) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________