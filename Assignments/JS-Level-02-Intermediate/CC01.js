/*
Write a program that takes an array of integers and returns the average of all the numbers in the array.
*/

let array01 = [10,20,30,40];

let findAverage = function(arrayValue){
    let array01_length = arrayValue.length;
    console.log(`Array length = ${array01_length}`);

    let sumOfArray = array01.reduce((total,currentvalue) => total+=currentvalue,0);
    console.log(`Sum Of Array = ${sumOfArray}`);

    return (sumOfArray/array01_length);
}   

let result = findAverage(array01);
console.log(result);