/*
The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned. 
*/

const array1 = [5, 12, 8, 130, 44];

const found = array1.findLast(element => element > 10);

console.log(found);
// Expected output: 12

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "cherries";
  }
  
  console.log(inventory.findLast(isCherries));
  // { name: 'cherries', quantity: 5 }

  
  
const result = inventory.findLast(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }


function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
  console.log([4, 5, 8, 12].find(isPrime)); // 5
  