/*
Write a program that takes an array of integers and returns a new array containing only the elements that appear more than once in the
original array
*/

let arrays = [1,2,1,3,4,3,1];
let uniqueArray = new Set(arrays);

let filteredElements = arrays.filter(currentValue => {
  if(uniqueArray.has(currentValue)){
    uniqueArray.delete(currentValue);
  }else{
    return  currentValue;
  }
});

console.log(filteredElements);

let set = new Set(filteredElements);

console.log('Filtered Elements :'+set);


let array = [1, 4, 8, 2, 4, 1, 6, 2, 9, 7, 1, 4];
function findDuplicates(arr) {
   return arr.filter((currentValue, currentIndex) =>
   arr.indexOf(currentValue) !== currentIndex);
}

let duplicate = findDuplicates(array);
console.log('Duplicates : '+duplicate);
