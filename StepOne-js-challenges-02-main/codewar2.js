let order = [1, 2, 3, 4, 5]

function descendingOrder(array) {

    for (i = 0; i < array.length; i++) {

        for (j = 0; j < array.length; j++) {

            if (array[i] > array[j]) {

                let biggest = array[i]

              // console.log(biggest)
            

            array[i] = array[j]

           // console.log (array[i])

            array[j] = biggest
                console.log(array[j])
            }
        }
    }
    return (array)
}

console.log (descendingOrder(order))