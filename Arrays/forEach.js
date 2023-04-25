const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

let  sumArray = [10,20,30,40,50];
let sumOfElements = 0;
sumArray.forEach(element => {
    sumOfElements+=element;
});
console.log("Sum of No "+sumOfElements);

var numbers = [1, 2, 3, 4] // sums to 100000
var Sum = 0;
numbers.forEach(item => {
    Sum += item;
 });
console.log(Sum);


let givenArray = [1, 4, 0, 9, -3];

/*
function sumArray(array) {
    let sum = 0;
  
    array.forEach(item => {
      sum += item;
    });
  
    console.log(sum);
    return sum;
  }
  
  sumArray(givenArray);
*/
  /* Push all the even elements of a given array to a new array */
  const e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenElement = [];

  e.forEach(x => {
    if(x % 2 == 0){
      evenElement.push(x);
    }
  })

  console.log(`Even Array ${evenElement}`);