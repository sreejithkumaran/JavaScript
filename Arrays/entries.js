
/*
entries() -  It creates an iterator object and a loop that iterates over each key/value pair.
Return - It returns the newly created array iterator object. 
         The iterator object represents each element of the array with keys assigned to them.
*/

var arr=['John','Michael','Embrose','Herry','Lewis'];  
var itr = arr.entries();

let e;
for(e of itr){
    console.log(e);
}

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

/*
console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
*/

for(let e of iterator1){
    console.log(e);
}


const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
