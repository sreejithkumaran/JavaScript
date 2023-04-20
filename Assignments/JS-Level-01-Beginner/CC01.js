/*
Write a program that prints the numbers from 1 to 100. But for multiples of three, print “Fizz” instead of the number and for the multiples of
five, print “Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”.
*/

const N = 100;
let fizz = 'Fizz';
let buzz = 'Buzz';

// Create an array of 100 No
const array = Array.from(Array(N+1).keys()).slice(1);
console.log(array);
console.log(array.length);
let currentVariable = 0;


console.log('-------------- Approach 1 --------------');
let printArray = array.forEach(x => {
    currentVariable = x;
    if (currentVariable % 3 == 0 && currentVariable % 5 == 0){
        console.log(`${currentVariable} - ${fizz} ${buzz}`);
        return;
    }else if(currentVariable % 5 == 0){
        console.log(`${currentVariable} - ${buzz}`);
        return;
    }else if(currentVariable % 3 == 0){
        console.log(`${currentVariable} - ${fizz}`);
        return;
    }else{
        console.log(`${currentVariable}`);
    }
})

let multipleOfThree = (element) => {
    return (element % 3 == 0) ? console.log(`${currentVariable} - ${fizz}`) : '';
}

let multipleOfFive = (element) => {
    return (element % 5 == 0) ? console.log(`${currentVariable} - ${buzz}`) : '';
}

let multipleOfThreeAndFive = (element) => {
    return (element % 3 == 0 && element % 5 == 0) ? console.log(`${currentVariable} - ${fizz} ${buzz}`) : '';
}

/*
console.log('-------------- Approach 2 --------------');
printArray = array.forEach(x => {
    currentVariable = ++x;
    multipleOfThreeAndFive(currentVariable);
    multipleOfThree(currentVariable);
    multipleOfFive(currentVariable);
    
})

*/