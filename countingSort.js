let unsortedArray = [6,7,5,9,5,3,12,4,1,0,2,5,5,9];

console.log(unsortedArray);


function countingSort(arr) {
    let counts = [];
    let n = 0;
    let max = getMaxOfArray(arr);

    for (let i=0; i<=max; i++){
        counts[i] = 0;
    }

    for (let i=0; i<arr.length; i++){
        counts[arr[i]]++;
    }

    for (let i = 0; i <= max; i++ ){
        for (let j=0; j<counts[i]; j++){
            arr[n] = i;
            n++;
        }
    }

    return arr;
}

function getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
}

console.log (countingSort(unsortedArray));

