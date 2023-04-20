/*
Write a program that takes an array of integers and returns the kth smallest element in the array.
*/

let intArray1 = [10,0,-3,5,12,-8,-1,15,-15];

// sort the array in ascending order
intArray1.sort(function (a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;

});

// copy the sorted array to another array
let sortedArray = [...intArray1];

let kth_Index = 3;
console.log(sortedArray.at(kth_Index)); // -1

kth_Index = 0;
console.log(sortedArray.at(kth_Index)); // -15

kth_Index = 1;
console.log(sortedArray.at(kth_Index)); // -8

kth_Index = 5;
console.log(sortedArray.at(kth_Index)); // -5


kth_Index = -2;
console.log(sortedArray.at(kth_Index)); // -12


//https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/