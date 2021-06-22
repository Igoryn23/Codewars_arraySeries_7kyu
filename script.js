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

// Array Leaders (Array Series #3)
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

// Row Weights
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
function rowWeights(array) {
    let first = 0;
    let second = 0;
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            first += array[i];
        } else {
            second += array[i];
        }
    }
    res.push(first, second);
    return res;
}
rowWeights([50, 60, 70, 80]);

// Maximum Gap (Array Series #4)
//  Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
function maxGap(numbers) {
    numbers.sort(function(a, b) {
        return a - b;
    })
    let temp = numbers[1] - numbers[0];
    console.log(temp);
    for (let i = 1; i < numbers.length; i++) {
        if ((numbers[i + 1] - numbers[i]) > temp) {
            temp = (numbers[i + 1] - numbers[i]);
        }
    }
    return temp;
}
maxGap();

// Minimum Steps (Array Series #6)
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

function minSteps(numbers, value) {
    let sum = 0;
    // sort
    numbers.sort(function(a, b) {
            return a - b;
        })
        // само решение 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (sum >= value) {
            return i;
        }
    }
}
minSteps([4, 1, 3, 2, 8], 10);