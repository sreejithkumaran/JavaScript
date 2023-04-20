// Set
let setRoles = new Set();
setRoles.add('Admin').add('SuperAdmin').add('Guest').add('Admin').add('guest');

console.log(setRoles); // Set(4) { 'Admin', 'SuperAdmin', 'Guest', 'guest' }

let chars = new Set(['a', 'a', 'b', 'c', 'c']);
console.log(chars);
console.log(typeof(chars)); //object
console.log(setRoles.size);

let exist = chars.has('a'); // true

chars.delete('f');
console.log(chars); // Set {"a", "b", "c", "d", "e"}

chars.clear();
console.log(chars); // Set{}


for (let role of setRoles) {
    console.log(role);
}

// In set keys and values are identical
for (let [key, value] of setRoles.entries()) {
    console.log(key === value);
}

// ForEach
setRoles.forEach(x => console.log(x));

// Program - https://www.programiz.com/javascript/set-weakset