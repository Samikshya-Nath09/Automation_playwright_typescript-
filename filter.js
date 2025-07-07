let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);  
console.log(evenNumbers);

let results = [{testcaseid: 1, status: 'pass'}, {testcaseid: 2, status: 'fail'}];
let failedTests = results.filter(r => r.status === 'fail');
console.log(failedTests);

const ages = [12, 18, 22, 10, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);