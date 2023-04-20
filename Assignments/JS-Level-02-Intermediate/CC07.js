/*
Write a program that takes an array of integers and returns a new array containing only the prime numbers from the original array
*/

let array01 = [1,2,3,4,5,6,7,8,9,10,10];

// prime no logic
function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  
  array01.forEach(function (element) {
  const isPrime = checkPrime(element);
  if (isPrime) {
    console.log(`${element} is a PRIME NUMBER`);
  } else {
    console.log(`${element} is NOT a prime number`);
  }
});


  
