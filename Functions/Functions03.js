/*
    JavaScript functions are first-class citizens.
    This means that you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.
*/
// Passing function as argument to another function
function add(a, b){
    return a+b;
}

let sum = add;

function average(a, b, fn){
    return fn(a, b)/ 2;
}

let result = average(10, 20, sum);

console.log(result);


// Returning functions from functions
function compareBy(propertyName){
    return function(a, b){
        let x = a[propertyName],
            y = b[propertyName];

    if(x > y){
        return 1;
    }else if(x < y){
        return -1;
    }else{
        return 0;
    }
};
}

// Sort by Name
let product = [
    { name: 'Nokia', price: 350 },
    { name: 'Apple', price: 1000},
    { name: 'Samsung Galaxy', price: 1500},
    { name: 'Oneplus', price: 500}
];

console.log('Products Sorted by Name');
product.sort(compareBy('name'));
console.table(product);

// Sort by Price
console.log('Products Sorted by Price');
product.sort(compareBy('price'));
console.table(product);


// More JavaScript Functions are First-Class Citizens example
function cmToInch(length){
    return length / 2.54;
}

function inchToCm(length){
    return length * 2.54;
}

function convert(fun, length){
    return fun(length);
}

let inches = convert(cmToInch, 10);
console.log(inches);

let cm = convert(inchToCm, 10);
console.log(cm);



