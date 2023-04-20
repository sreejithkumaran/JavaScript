/*
Write a program that takes a string and returns a new string with all the vowels removed.
*/

let str = 'abbecidoduefaggehhuttt';
let vowels = [];
// convert string to array
let strArray = Array.from(str);
console.log(strArray);

const strVowels = strArray.forEach( e => {
    if(e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u'){
        vowels.push(e);
    }
});

// convert array to string
vowels = vowels.join('');
console.log(vowels +" - "+typeof vowels);  // aeioueaeu - string
