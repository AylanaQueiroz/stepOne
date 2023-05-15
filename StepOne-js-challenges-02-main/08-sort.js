// Ordenação. Faça uma função que ordene o array de forma crescente, 
// ou seja, do menor para o maior número.
// Esse desafio foi dado em um code challenge para entrevista de emprego! :)

let exampleArray = [573, 105, 13, 10, 52];

// i=0  j=0
function crescente(array) {


    for (i = 0; i < array.length; i++) {
 
        console.log(i+ ' aqui i primeiro for')
        for (j = 0; j < array.length; j++) {
            console.log(j + ' aqui j segundo for')
            console.log(i + ' aqui i segundo for')

            //// i inicia = 573  e o j inicia = 105 ; 573 > 105 

            if (array[i] > array[j]) {
                // se 573 > 105
                let biggestValue = array[i];
                console.log(biggestValue + ' biggestValue')
                // biggestValue = 573
                array[i] = array[j]
                console.log(array[i] + ' array[i]')
                // array[0] = 105

                array[j] = biggestValue
                console.log(array[j] + ' array[j]')
                // array[1] = 573
            }

            //105 573 
        }


    }
    return (array)

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