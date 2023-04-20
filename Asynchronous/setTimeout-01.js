
// program to display a text using setTimeout method
function display() {
    console.log('Hello world');
}

setTimeout(display, 3000);
console.log('This message is shown first');


// program to display a name
function displayName(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passing argument to setTimeout
setTimeout(displayName, 1000, 'John', 'Doe');

/*
Hello John Doe
Hello world
*/