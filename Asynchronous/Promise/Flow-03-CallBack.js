/*
    1. Register
    2. Send Email
    3. Login
    4. Get User Data
    5. Display User Data
*/

function register(callback){
    setTimeout(()=> {
        console.log(' --- Task { 1 } : Registration process Starts ---');
        callback();
    },1000);   
}

function sendEmail(callback){
    setTimeout(() => {
        console.log(' --- Task { 2 } : Send Email process Starts ---');
        callback();
    }, 3000);   
}

function login(callback){
    setTimeout(() => {
        console.log(' --- Task { 3 } : Login process Starts ---');
        callback();
    }, 2000);
}

function getUserData(callback){
    setTimeout(() => {
        console.log(' --- Task { 4 } : Get user data process Starts ---');
        callback();
    }, 6000);
    
}

function displayUserData(){
    setTimeout(() => {
        console.log(' --- Task { 5 } : Display user data process Starts ---');
    }, 2000);
    
}

// Call back hell
register(function(){
    sendEmail(function(){
        login(function(){
            getUserData(function(){
                displayUserData();
            });
        }); 
    }); 
});


/* Output : Asynchronous
 --- Task { 1 } : Registration process Starts ---
 --- Task { 3 } : Login process Starts ---
 --- Task { 5 } : Display user data process Starts ---
 --- Task { 2 } : Send Email process Starts ---
 --- Task { 4 } : Get user data process Starts ---
*/