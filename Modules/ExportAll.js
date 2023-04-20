// Export All from util.js file

export * from './ExportAll.js'

function display(text){
    console.log(`Hellow ${text} !!`);
}

// exporting a function
let sum = (a,b) => a+b;

// exporting a function
const gererateEmail = (a,b) => a+"."+"@email.com";

let isOddEven =(a) => a % 2 == 0 ? true : false; 

// export variable
const pie = 3.14;
