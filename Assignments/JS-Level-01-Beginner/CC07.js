/*
Write a program that takes a string and returns the number of vowels in that string.
*/

let str = 'abecieoeuuex';
let counter=0;

function countVowells(str){
    let currentString = str.toLowerCase();
    for (let i = 0 ; i< str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            counter++;
        }
    }
    return counter;
}

let  vowels = countVowells(str);
console.log(vowels); // 9

