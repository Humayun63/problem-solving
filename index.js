/*
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
*/
const reverseString = string => {
    const arrayOfString = string.split('');
    const reversedArray = []
    arrayOfString.forEach(item => reversedArray.unshift(item))
    return reversedArray.join('')
}

// console.log(reverseString('hello world'))

/*
Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
*/

const sumOfPositives = array => {
    let sum = 0;
    array.forEach(item => (item > 0) && (sum += item))
    return sum
}

// console.log(sumOfPositives([2, -5, 10, -3, 7]))

/**
Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
*/
const findFrequent = array => {
    const object = {};
    let frequent = null;
    array.forEach(item => {
        if (object[item]) {
            object[item] = object[item] + 1
        } else {
            object[item] = 1
        }
    })
    for (let key in object) {
        if (frequent === null) {
            frequent = key
        } else {
            if (object[key] > object[frequent]) {
                frequent = key
            }
        }
    }
    return frequent
}

// console.log(findFrequent( [3, 5, 2, 5, 3, 3, 1, 4, 5]))

/*
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
*/

const findIndices = (array, target) => {
    const result = []
    for (let item of array) {
        let remain = target - item;
        if (array.includes(remain)) {
            result.push(array.indexOf(item))
            result.push(array.indexOf(remain))
            break;
        }
    }
    return result
}

// console.log(findIndices([1, 3, 6, 8, 11, 15], 9))