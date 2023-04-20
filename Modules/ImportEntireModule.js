import { sum } from "lodash";
import * as u from "./util.js";

let displyName = u.display('Alice');
console.log('Display Name : '+u.displayName);

let add = sum(10,20);
console.log('Sum : '+u.sum);
console.log('Sum : '+add);

let email = u.gererateEmail('sreejith','kumaran');
console.log('Email : '+email);

const areaOfCircle = (a,b) => a *(b*b);
const area = areaOfCircle(u.pie, 5);
console.log(area); 