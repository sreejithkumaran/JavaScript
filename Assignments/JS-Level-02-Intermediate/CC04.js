/*
Write a program that takes an array of integers and returns the median of the numbers in the array (i.e., the middle number when the array is
sorted).
*/

let array01 = [10, 50, 30, 90, 80, 40, 70, 30, 60, 100];

function findMedian(arr) {

  let median, middleIndex;

  // Sort the given array in ascending order
  arr.sort((a, b) => a - b);
  console.log(arr);

  // calculate the middle index
  middleIndex = Math.floor(arr.length / 2);

  if (arr.length != 0) {
    median = arr[middleIndex];
  } else {
    median = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
  }
  return median;
}

let median = findMedian(array01);
console.log('Median = '+median);

array01 = [10, 50, 30, 90, 80, 40, 70, 30, 60, 100,20];
median = findMedian(array01);
console.log('Median = '+median);