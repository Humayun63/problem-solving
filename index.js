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

/** 
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/
const calculator = (a, b, operator) => {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return a / b;
}
// console.log(calculator(4,2,'+'));
// console.log(calculator(4,2,'-'));
// console.log(calculator(4,2,'*'));
// console.log(calculator(4,2,'/'));


/**
Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
*/

//It will return minimum 4 length password and maximum with the provided length
const passwordGenerator = length => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChar = '~!@#$%^&*-_';
    const allChar = uppercase + lowercase + numbers + specialChar;
    let password = '';

    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length))
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length))
    password += numbers.charAt(Math.floor(Math.random() * numbers.length))
    password += specialChar.charAt(Math.floor(Math.random() * specialChar.length))

    while (password.length < length) {
        console.log(password);
        password += allChar.charAt(Math.floor(Math.random() * allChar.length))
    }

    return password;
}

// console.log(passwordGenerator(8))

/** 
Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/
const findSecondSmallest = array =>{
    const sortedArray = array.sort((a,b) => a-b)
    return sortedArray[1]
}
// console.log(findSecondSmallest([5,4,6,78,2,3,1]))
