/*
    1. Register
    2. Send Email
    3. Login
    4. Get User Data
    5. Display User Data
*/

function register(){
    
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(' --- Task { 1 } : Registration process Starts ---');
            resolve();
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
            //return reject('Invalid Credentials....')
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


async function authenticate(){
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
}

authenticate().then(() => {
    console.log('All process completed');
}).catch((error) => {
    console.log(error);
});

/*
register()
.then(sendEmail)
.then(login)
.then(getUserData)
.then(displayUserData)
.catch((error) => {
    console.log('Error : '+error);
});
*/


/* Output : Promise - Reject
 
Resolve -
 --- Task { 1 } : Registration process Starts ---
 --- Task { 2 } : Send Email process Starts ---
 --- Task { 3 } : Login process Starts ---
 --- Task { 4 } : Get user data process Starts ---
 --- Task { 5 } : Display user data process Starts ---


Reject -
 --- Task { 1 } : Registration process Starts ---
 --- Task { 2 } : Send Email process Starts ---
 --- Task { 3 } : Login process Starts ---
Invalid Credentials....
*/