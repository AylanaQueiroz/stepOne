// Filtre o array. Crie uma função chamada filterArray que recebe um Array 
// de números como parâmetro de entrada. Essa função deve eliminar 
// todos os números negativos e devolver o array apenas com valores 0 
// e/ou números positivos.

// Exemplo:
// [1, -2, 0, 5, 8, -3] -> [1, 0, 5, 8]



 var exampleArray = [1, -2, 0, 5, 8, -3]

 var positiveNumbers=[]

 i=0 

     for (i=0; i<exampleArray.length; i++) {

            
            if (exampleArray[i]>=0) {

                positiveNumbers.push(exampleArray[i])
            }
     }
    
console.log(positiveNumbers)





















/*



var theArray = [1, -2, 0, 5, 8, -3]
var newArray= [];


 for (var i=0; i<theArray.length; i++) {
     
      if (theArray[i] >= 0){
           newArray.push(theArray[i])
           
      }
 }

 
 console.log (newArray)
 




// ________________________ TEST ________________________
console.log('TEST:')
function compareArrays(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}
if (compareArrays(filterPositiveNumbers([1, -2, 0, 5, 8, -3]), [1, 0, 5, 8])) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________
*/