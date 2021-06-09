// Minimize Sum Of Array (Array Series #1)
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
    let sum = 0;
    arr.sort(function(a, b) {
        return a - b;
    })
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[arr.length - 1 - i];
        if (i === arr.length / 2 - 1) {
            break;
        }
    }
    return sum;
}

minSum([5, 4, 2, 3]);

// An element is leader if it is greater than The Sum all the elements to its right side.
// Given an array/list [] of integers , Find all the LEADERS in the array.


var arrayLeaders = numbers => {
    let arr = [];
    let sumTemp = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
            sumTemp += numbers[k];
        }
        if (numbers[i] > sumTemp) {
            arr.push(numbers[i]);
        }
        sumTemp = 0;
    }
    return arr;
}

arrayLeaders([1, 2, 3, 4, 0]);