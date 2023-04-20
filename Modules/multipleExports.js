import { display, sum, gererateEmail, pie } from "./util.js";

let displyName = display('Alice');
console.log('Display Name : '+display);

let add = (10,20);
console.log('Sum : '+sum);
console.log('Sum : '+add);

let email = gererateEmail('sreejith','kumaran');
console.log('Email : '+email);

const areaOfCircle = (a,b) => a *(b*b);
const area = areaOfCircle(pie, 5);
console.log(area);