/* Closure Fuctions -
    Inner functions always has access to outer functions variables even if outer function has returned
    Closure Functions is useful in hinding implemenation details. 
*/

// JavaScript Nested Functions

// outer function
function myPrint01(name){
    // inner function
    function displayName(){
        console.log("Hi " +name);
    }

    // calling innner function
    displayName();
}

// calling outer function
myPrint01('john');  // Hi john
myPrint01('sena'); // Hi sena

// Returning a Function
function myPrint02(name){
    // inner function
    function displayName(){
        console.log("Hi " +name);
    }

    // return a function
    return displayName;
}

const g1 = myPrint02('john');  
console.log(g1); // Returns display function - [Function: displayName]
g1(); // Hi john


// JavaScript Closure Example
function display(firstName, lastName){
    let email = firstName+"."+lastName+"@e.com";

    // inner function
    function displayEmail(){
        return 'Hi , '+firstName+" "+lastName+" . Your Email : "+email;
    }

    return displayEmail;
}

const disp01 = display("Sreejith", "Kumaran");
console.log(disp01); // return the function definition
console.log(disp01());


function calculateProductPrice(amount){
    console.log('Amount without GST : '+amount);
    
    function calcuate_CGST(){
        let cgst = amount * 0.3;
        console.log(' inside  calcuate_CGST ( cgst ) = '+cgst);
        return cgst;
    }

    function calcuate_SGST(){
        let sgst = amount * 0.2;
        console.log(' inside  calcuate_SGST ( sgst ) = '+sgst);
        return sgst;
    }

    let calculated_CGST = calcuate_CGST();
    let calculated_SGST = calcuate_SGST();

    let finalPrice = amount + calculated_CGST + calculated_SGST;
    console.log(`Fees Breakup = ${amount} + ${calculated_CGST} + ${calculated_SGST}`);
    return finalPrice;
}

console.log(calculateProductPrice(1000));
