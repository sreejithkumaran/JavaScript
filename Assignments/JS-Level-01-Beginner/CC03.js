/*
Write a program that takes an array of integers and returns the sum of all the numbers in the array.
*/

let arrayNo = [10,20,30,40,50];

let sumOfElement = 0;

/************************ Approach - 2 { forEach() } *************************/
let sum = arrayNo.forEach(element => sumOfElement+=element);
console.log(`sum of ${arrayNo} = ${sumOfElement}`);

/************************ Approach - 2 { reduce() } *************************/
sumOfElement = 0;
sumOfElement = arrayNo.reduce((total, currentElement) => total + currentElement, 0);
console.log(`reduce() : ${sumOfElement}`);

/************************ Approach - 3 { reduceRight() } *************************/
sumOfElement = 0;
sumOfElement = arrayNo.reduceRight((total, currentElement) => total + currentElement, 0);
console.log(`reduceRight() : ${sumOfElement}`);


/************************ Approach - 4 *************************/

function addArrayElements(arr){
    let total = 0;

    let isNumberArray = arr.every(element => typeof element === 'number');
    console.log('All Element in Array is Number ? ->  '+isNumberArray);

    if(isNumberArray === true){
      total = arr.reduce((total, currentElement) => total + currentElement, 0);
    }else{
        console.log('All the elements in Array should be Number');
    }
    return total;
    
}


let oddArray = [1,3,5,7,9];
let mixArray = [1,2,'a','b','c'];

let function01 = addArrayElements(oddArray);
console.log(`${oddArray} = > `+function01);

let function02 = addArrayElements(mixArray);
console.log(`${mixArray} = > `+function02)