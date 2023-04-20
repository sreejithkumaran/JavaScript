/* Concat() -  	It returns a new array object that contains two or more merged arrays.
    Return - New Array Object
*/

let arr1 = [1, 2, 3, 4];
let arr2 = ['Java', 'C', 'C++'];
let result = arr1.concat(arr2);
console.log('Conact = '+result); //  1,2,3,4,Java,C,C++

let person01 = [{
    fname : 'sreejith',
    lname : 'kumaran',
    org : 'Ellucian'
},{
    fname : 'ray',
    lname : 'john',
    org : 'Ellucian'
}
];

let person02 = [{
    fname : 'jobs',
    lname : 'steve',
    org : 'Ellucian'
}];

let person03 = [{
    fname : 'mathew',
    lname : 'sam',
    org : 'AVT'
}];

let person = person01.concat(person02).concat(person03);
console.log(person);

/*
[
  { fname: 'sreejith', lname: 'kumaran', org: 'Ellucian' },
  { fname: 'ray', lname: 'john', org: 'Ellucian' },
  { fname: 'jobs', lname: 'steve', org: 'Ellucian' },
  { fname: 'mathew', lname: 'sam', org: 'AVT' }
]
*/

