/*
Write a program that takes a string and returns the reverse of that string.
*/

let str = 'abcd';

/*******************  Approach - 01 *******************/
console.log('str : '+str);

// convet string to Array
let arrayStr = Array.from(str);
console.log('Array String : '+ arrayStr+' { typeof arrayStr = '+ typeof arrayStr+" }");

// reverse the array using .reverse() function
let revArray = arrayStr.reverse();
console.log('Reverse Array : '+revArray);

let revString = revArray.join("");
console.log('revString : '+revString+ ' {typeof revString = '+typeof revString+' }');

revString = Array.from(str).reverse().join("");
console.log('Chaining 3 methods togather { from() , reverse(), join("") = '+revString);

/*******************  Approach - 02 *******************/

function reverseString(str){
    let reverseString = '';
    // base condition check
    if(typeof str !== 'string' ||  str.length < 2){
        return 'Invalid Input';

    }

    for(let i = str.length-1; i >= 0 ; i--){
        reverseString += str[i];
    }
    return reverseString;
}

str = 'ellucian';
revString = reverseString(str);   // Invalid Input
console.log(`${str} ${revString}`); // Invalid Input


revString = reverseString(123456);
console.log(`${revString}`);

revString = reverseString('a');
console.log(`${revString}`);