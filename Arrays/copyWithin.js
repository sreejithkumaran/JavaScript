/*
copyWithin() - It copies the part of the given array with its own elements and returns the modified array.
Return - Returns modified Array
array.copyWithin(target, start, end)  
*/

let  arr =["AngularJS","Node.js","JQuery","Bootstrap"];

var result = arr.copyWithin(0,1,3);    // // place from 0th position, the elements between 1st and 3rd position.  
console.log(result);  // [ 'Node.js', 'JQuery', 'JQuery', 'Bootstrap' ]
console.log(arr);    // [ 'Node.js', 'JQuery', 'JQuery', 'Bootstrap' ]


const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

