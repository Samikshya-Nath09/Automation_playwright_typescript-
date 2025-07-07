//let numbers = [1, 2, 3];
//let doubled = numbers.map(num => num * 2);  
//console.log(doubled);

let usernames = ['user1', 'user2'];
let testUsers = usernames.map(u => ({ username: u, password: 'Test@123' }));
console.log(testUsers);

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); 