/*
Shallow equality :
During the shallow equality check of objects you get the list of properties (using Object.keys()) of both objects, then check the properties' values for equality.
*/

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

const hero1 = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  movie: 'Batman'
};

const hero2 = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  movie: 'Batman'
};

const hero3 = {
  name: 'Joker'
};
const hero4 = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  movie: 'xxx'
};

console.log('shallowEqual(hero1, hero1) : '+shallowEqual(hero1, hero1)); // true
console.log('shallowEqual(hero1, hero2) : '+shallowEqual(hero1, hero2)); // true
console.log('shallowEqual(hero1, hero3) : '+shallowEqual(hero1, hero3)); // false
console.log('shallowEqual(hero1, hero4) : '+shallowEqual(hero1, hero4)); // false

/*
shallowEqual(hero1, hero2) returns true because the objects hero1 and hero2 have the same properties (name and realName) with the same values.

On the other side, shallowEqual(hero1, hero3) returns false since hero1 and hero3 have different properties.

If the properties' values of objects to compare are primitive values, then the shallow equality check is the way to go.
*/


// But objects in JavaScript can be nested. In this case, unfortunately, shallow equality doesn't work well.

const movie01 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
const movie02 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
console.log('shallowEqual(hero1, hero2) : '+shallowEqual(movie01, movie02)); // => false
/*
This time, even hero1 and hero2 have the same content, shallowEqual(hero1, hero2) returns false.

The nested objects hero1.address and hero2.address are different object instances. Thus shallow equality considers hero1.address and hero2.address to be not equal.

Fortunately, the deep equality correctly compares the objects that contain other objects. Let's take a look at how this works.
*/