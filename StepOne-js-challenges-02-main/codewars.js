/*const str = 'i have learned something new today';
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice();

}

//const str2 = arr.join(" ");
console.log(arr);
*/
const phrase = 'the-stealth-warrior'
function toCamelCase(receba) {

    
    const array = receba.split("-");

    for (i = 1; i < array.length; i++) {

        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
        
    } 
    return(array.join(''))
}

console.log(toCamelCase(phrase))
//stringToCamel(phrase)