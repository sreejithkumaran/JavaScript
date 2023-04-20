/*
    1. Register
    2. Send Email
    3. Login
    4. Get User Data
    5. Display User Data
*/

function register(callback){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            reject('Error in  Registration....');
            // return reject('Error in  Registration....');
            console.log(' --- Task { 1 } : Registration process Starts ---');
            //resolve();
        },1000);  
    });
}

function sendEmail(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' --- Task { 2 } : Send Email process Starts ---');
            resolve();
        }, 3000); 
    });    
}

function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' --- Task { 3 } : Login process Starts ---');
            resolve();
        }, 2000);
    }); 
}

function getUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(' --- Task { 4 } : Get user data process Starts ---');
            resolve();
        }, 6000);
    });
}

function displayUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' --- Task { 5 } : display user data process Starts ---');
            resolve();
        }, 6000);
    });
}



register()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
.catch((error) => {
    console.log('Error : '+error);
});



/* Output : Promise - Reject
  --- Task { 1 } : Registration process Starts ---
Error : Error in  Registration....
*/