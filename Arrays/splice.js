// replacing "Java" & "Lua" with "C" & "C++"
let languages = ["JavaScript", "Python", "Java", "Lua"];
let removed = languages.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
languages = ["JavaScript", "Python", "Java", "Lua"];
let removed1 = languages.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// removing 3 elements
languages = ["JavaScript", "Python", "Java", "Lua"];
let removed2 = languages.splice(2, 3);
console.log(removed2); // [ 'Java', 'Lua' ]
console.log(languages); // [ 'JavaScript', 'Python' ]