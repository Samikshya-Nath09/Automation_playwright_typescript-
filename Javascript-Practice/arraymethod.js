//let fruits = ["apple", "banana ,"];
//fruits.push("orange");  
//console.log(fruits);

let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.pop();  
console.log(removedFruit);  
console.log(fruits); 

let firstFruit = fruits.shift();  
console.log(firstFruit);  
console.log(fruits);

//let fruits = ["banana", "orange"];
fruits.unshift("apple");  
console.log(fruits);

//let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "kiwi");  
console.log(fruits);  

