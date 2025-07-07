let colors = ["red", "green", "blue"];
let colorscolor = ["red", "green", 12];
console.log(colors[0]);  
console.log(colors.length);  
console.log(typeof colors);  

//Traditional
//let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Modern
//let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

//Foreach
//let colors = ["red", "green", "blue"];
colors.forEach(function(color) {
    console.log(color);
});

colors.forEach(color => console.log(color));




