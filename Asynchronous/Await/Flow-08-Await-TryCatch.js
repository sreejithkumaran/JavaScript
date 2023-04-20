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
            resolve('Registration Process Successfull..');
        },1000);  
    });
}

function sendEmail(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' --- Task { 2 } : Send Email process Starts ---');
            resolve('Send Email Process Successfull..');
        }, 3000); 
    });    
}

function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(' --- Task { 3 } : Login process Starts ---');
            resolve('Login Process Successfull..');
            //return reject('Invalid Credentials....')
        }, 2000);
    }); 
}

function getUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(' --- Task { 4 } : Get user data process Starts ---');
            resolve('Get User Data Process Successfull..');
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
    try{
        let a = await register();
        let b = await sendEmail();
        let c =await login();
        let d = await getUserData();
        let e = await displayUserData();
        console.log(`${a} ${b} ${c} ${d} ${e}`)
    }catch(err){
        console.log(err);
    }
    
}

authenticate().then(() => {
    console.log('All process completed');
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