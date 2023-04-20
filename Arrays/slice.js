const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let newArray = animals.slice(2)
console.log(newArray);  // ["camel", "duck", "elephant"]

newArray = animals.slice(2, 4);
console.log(newArray); // ["camel", "duck"]

newArray = animals.slice(1, 5);
console.log(newArray); // ["bison", "camel", "duck", "elephant"]

newArray = animals.slice(-2);
console.log(newArray); // ["duck", "elephant"]

newArray = animals.slice(2, -1);
console.log(newArray);  // ["camel", "duck"]

newArray = animals.slice();
console.log(newArray); // ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals); // ["ant", "bison", "camel", "duck", "elephant"]