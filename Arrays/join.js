/*
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. 
*/

let elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

elements = ['Fire', 'Air', 'Water'];
console.log(elements.join(''));
// Expected output: "FireAirWater"

elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"