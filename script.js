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