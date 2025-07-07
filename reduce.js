//let numbers = [1, 2, 3, 4];
//let sum = numbers.reduce((acc, num) => acc + num, 0);  
//console.log(sum);

let results = ['pass', 'fail', 'pass'];
let passCount = results.reduce((acc, r) => r === 'pass' ? acc + 1 : acc, 0);
console.log(passCount);

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);