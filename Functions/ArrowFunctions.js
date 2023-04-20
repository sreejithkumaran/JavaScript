let add = function(a, b){
    return a * b;
}

console.log(add(10, 20)); // 200

let sum =(a, b) => a * b;
console.log(sum); // [Function: sum]
console.log(sum(5, 10)); // 50

console.log(typeof add); // function
console.log(sum instanceof Function); // true

// Sort in descending order
let number = [4, 2, 6];
number.sort(function(a,b){
    return b-a;
});

console.log(number);

// Sort in acending order
number.sort((a,b) => a-b);
console.log(number);

let names = ['John', 'Mac', 'Peter'];
let length = names.map(name => name.length);
console.log(length);  // [ 4, 3, 5 ]


var areaOfCircle = (r, pie = 3.14) => {
    let area = pie*(r*r);
    console.log("Area of Circle with radius : "+r+" is "+area);
}

areaOfCircle(5); 

let taxRate =() => 0.5;
let getPrice = (a) => a*taxRate();

let productPrice = 1000;
let taxAmount = getPrice(productPrice);
let totalProductPrice = productPrice+taxAmount;
console.log("Total Product Price "+totalProductPrice); // 1500


// Default Parameter
function say(message) {
    console.log(message);
}

/*
say(); // undefined

function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say(); // 'Hi'
*/