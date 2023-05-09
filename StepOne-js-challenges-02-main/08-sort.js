// Ordenação. Faça uma função que ordene o array de forma crescente, 
// ou seja, do menor para o maior número.
// Esse desafio foi dado em um code challenge para entrevista de emprego! :)

let exampleArray = [573, 105, 13, 10, 52];

function crescente (array){
    
    

    for (i=0; i<array.length; i++) {

     for (j=0; j<array.length; j++){

        if (array[i] > array[j] ){

                let biggestValue= array[i];
        }

       
     }   
   

    }


}

crescente(exampleArray)

/*
// ________________________ TEST ________________________
console.log('TESTS:')
function compareArrays(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}
if(compareArrays(sort(exampleArray), exampleArray.sort())) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________*/