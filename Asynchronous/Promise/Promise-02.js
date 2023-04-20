/*
1. Display given array lenght and filter (+) Integers and return (+) Integers in new array, 
2. Filter even integers form the give array , display total count and return even integers in new array,
3. Sum up all the interger in the given array and check sum >= 100;
*/

let array01 = [10, -20, 30, 45, -11, -13, 55, 80, -61, -66, -19, -20];

let array02 = [5, -5, 10, -50, 70];

let getPostiveArray = function (array) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(`Input Array = ${array}`);

      let postiveArray = [];
      let array_length = array.length;

      if (array_length) {
        postiveArray = array.filter((element) => element > 0);
        console.log("Array length { Positive }: " + postiveArray.length);
        resolve(postiveArray);
      } else {
        reject("Array is Empty..");
      }
    }, 5000);
  });
};

let getEvenInteger = function (array) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let evenArray = [];
      let array_length = array.length;

      if (array_length > 0) {
        evenArray = array.filter((element) => element % 2 == 0);
        console.log("Array length { Even }: " + evenArray.length);
        resolve(evenArray);
      } else {
        reject("Array is Empty..");
      }
    }, 3000);
  });
};

let sumOfArray = function (inputArray) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let sumOfArray = 0;
      let array_length = inputArray.length;

      if (array_length > 0) {
        inputArray.forEach((element) => (sumOfArray += element));
        console.log(`Sum of Even Array ${sumOfArray}`);

        console.log(`Sum of the array = ${sumOfArray}`);
        if (sumOfArray > 99) {
          resolve(`Sum of the array is ${sumOfArray} `);
        } else {
          reject("Sum of Array < 100");
        }
      } else {
        reject("Array is Empty..");
      }
    }, 1000);
  });
};


console.log(' --------- Promise -----------------');

getPostiveArray(array01)
  .then(response => {
    console.log(response);
    return getEvenInteger(response)
  }).then(response => {
    console.log(response);
    return sumOfArray(response)
  }).catch((error) => {
    console.log(error);
  });

  /* Output  --------- Promise -----------------
Input Array = 10,-20,30,45,-11,-13,55,80,-61,-66,-19,-20
Array length { Positive }: 5
[ 10, 30, 45, 55, 80 ]
Array length { Even }: 3
[ 10, 30, 80 ]
Sum of Even Array 120
Sum of the array = 120
*/

console.log(" --------- Async - wait -----------------");
async function calcuateResult() {
  try {
    const result_PositiveArray = await getPostiveArray(array02);
    console.log(`${result_PositiveArray}`);

    const result_EvenArray = await getEvenInteger(result_PositiveArray);
    console.log(`${result_EvenArray}`);

    const result_SumOfArray = await sumOfArray(result_EvenArray);
  } catch (error) {
    console.log(error);
  }
}

// async - wait call
calcuateResult();



/* Output   --------- Async - wait -----------------
Input Array = 5,-5,10,-50,70
Array length { Positive }: 3
5,10,70
Array length { Even }: 2
10,70
Sum of Even Array 80
Sum of the array = 80
Sum of Array < 100
*/
