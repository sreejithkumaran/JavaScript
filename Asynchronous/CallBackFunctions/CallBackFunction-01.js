/*
Execute : node .\JavaScript\Asynchronous\CallBackFunctions\CallBackFunction-01.js
*/

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

/*
Hi Peter
I am callback function
*/