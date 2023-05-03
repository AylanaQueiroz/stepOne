// Ordenação. Faça uma função que ordene o array de forma crescente, 
// ou seja, do menor para o maior número.
// Esse desafio foi dado em um code challenge para entrevista de emprego! :)

let exampleArray = [573, 105, 13, 10, 52];
let ordened = []


function sort(array) {


    for (i = 0; i < array.length; i++) {

        let ordened = array[i]


        if (array[i] < ordened) {

            console.log(ordened)
        }

        ordened += ordened
        console.log(ordened)
    }

}

sort(exampleArray)

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