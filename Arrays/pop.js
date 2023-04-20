const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

let lastElement = plants.pop();
console.log(lastElement);  // "tomato"
console.log(plants) //["broccoli", "cauliflower", "cabbage", "kale"]


lastElement = plants.pop();
console.log(lastElement);  // "kale"
console.log(plants) //["broccoli", "cauliflower", "cabbage"]
