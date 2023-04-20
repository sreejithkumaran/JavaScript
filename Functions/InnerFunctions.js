// Sample-01
var p = 10; // global
console.log('1 - p = '+p);  // 10

function show(){
    var p = 20; // local to show()
    console.log('2 - p = '+p);  //20

    function inner(){
        var p = 30; // local to inner()
        console.log('3 - p = '+p);
    }

    console.log('2 - p = '+p); 

    inner();

    console.log('4 - p = '+p);
}

show();

console.log('5 - p = '+p);
console.log("DONE...");  // 10 20 20 30 20 10

// Sample-02

var q = 10; // global
console.log('1 - q = '+q);  // 10

function show(){
     q = 20; 
    console.log('2 - q = '+q);  //20

    function inner(){
         q = 30; 
        console.log('3 - q = '+q);
    }

    console.log('2 - q = '+q); 

    inner();

    console.log('4 - q = '+q);
}

show();

console.log('5 - q = '+q);
console.log("DONE...");   // 10 20 20 30 30 30

// Sample-03
var x = 100;
console.log(x);

function display(){
    var x = 20;

    function displayA(){
        var x = 44;
        console.log(x);
    }

    function displayB(){
        var x = 7.5;
        console.log(x);
    }

    console.log(x);
    displayA();
    console.log(x);
    displayB();
    console.log(x);
}

display();
console.log(x);

// 100 20 44 20 7.5 20 100