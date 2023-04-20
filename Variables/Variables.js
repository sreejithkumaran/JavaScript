// var scope
var x = 100;
console.log("Block-1 => "+x);
if( x > 0){
    x = "sreejith";
    console.log("Block-IF => "+x);
}else{
    x = false;
    console.log("Block-ELSE => "+x);
}

console.log("Block-2 => "+x);

// var scope
var x = 100;
console.log("Block-1 => "+x);
if( x > 0){
    var x = "sreejith";
    console.log("Block-IF => "+x);
}else{
    var x = false;
    console.log("Block-ELSE => "+x);
}

var x = 50;
console.log("Block-2 => "+x);

let y = 100;
console.log("Block-1 => "+y);
if( y > 0){
    y = "sreejith";
    console.log("Block-IF => "+y);
}else{
    y = false;
    console.log("Block-ELSE => "+y);
}

console.log("Block-2 => "+y);


let z = 100;
console.log("Block-1 => "+z);
if( z > 0){
    let z = "sreejith";
    console.log("Block-IF => "+z);
}else{
    let z = false;
    console.log("Block-ELSE => "+z);
}

console.log("Block-2 => "+z);