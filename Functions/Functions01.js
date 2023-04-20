// 1
function display(disp){
    console.log(disp);
}

display(100); // 100
display("Apple"); // Apple
console.log(typeof(display)) // function

// 1
function sum(a,b){
    console.log(typeof(a), typeof(b));
    let output = a + b;
    console.log(output);
}

sum(10,20); //2-
sum(10,9.99);  // 19.99
sum("a","b"); // ab

function sumOfArray(arr){
    var sum = 0;
    console.log(arr);
    for(let i in arr){
        sum+=arr[i];
    }
    return sum;
}

let arr1 = [10,20,30,40,50];

let sum1 = sumOfArray(arr1);
console.log(sum1);

//2
let addArray = function(arr){
    var sum = 0;
    for(let i in arr){
        sum+=arr[i];
    }
    return sum;
}

var result01 = addArray(arr1);
console.log(result01);

let arr2 = [1.5,2.66,3.67,4.54,5.10];
var result02 = addArray(arr2);
console.log(result02);

//3
function sumArguments(){
    var result = 0;
    for(let i=0; i < arguments.length; i++){
        result+= arguments[i];
    }
    return result;
}

let a = sumArguments();
console.log(a); //0

let b = sumArguments(10, 20);
console.log(b); // 30

let c = sumArguments(10, 20, 30, 40);
console.log(c); // 100



