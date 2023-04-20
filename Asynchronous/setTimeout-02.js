
// program to display a text using setTimeout method
function display() {
    console.log('Hello world');
}

let intervalId = setTimeout(display, 3000);
console.log('Id: ' + intervalId);   