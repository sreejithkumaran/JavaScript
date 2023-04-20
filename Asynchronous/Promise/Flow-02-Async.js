/*
    1. Register
    2. Send Email
    3. Login
    4. Get User Data
    5. Display User Data
*/

function register(){
    setTimeout(()=> {
        console.log(' --- Task { 1 } : Registration process Starts ---');
    },1000);   
}

function sendEmail(){
    setTimeout(() => {
        console.log(' --- Task { 2 } : Send Email process Starts ---');
    }, 3000);   
}

function login(){
    setTimeout(() => {
        console.log(' --- Task { 3 } : Login process Starts ---');
    }, 2000);
}

function getUserData(){
    setTimeout(() => {
        console.log(' --- Task { 4 } : Get user data process Starts ---');
    }, 6000);
    
}

function displayUserData(){
    setTimeout(() => {
        console.log(' --- Task { 5 } : Display user data process Starts ---');
    }, 2000);
    
}

register();
sendEmail();
login();
getUserData();
displayUserData();

/* Output : Asynchronous
 --- Task { 1 } : Registration process Starts ---
 --- Task { 3 } : Login process Starts ---
 --- Task { 5 } : Display user data process Starts ---
 --- Task { 2 } : Send Email process Starts ---
 --- Task { 4 } : Get user data process Starts ---
*/