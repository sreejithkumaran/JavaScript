/*
Write a program that takes a string and returns true if the string is a palindrome (i.e., the string is the same forwards and backwards), and
false otherwise.
*/


let revString;

function testPalindrome(str){
    let isPalindrom = false;
    revString = Array.from(str).reverse().join('');
    if(str === revString){
        isPalindrom = true;
    }
    return isPalindrom;
}

console.log(testPalindrome('malayalam'));
console.log(testPalindrome('abc'));

