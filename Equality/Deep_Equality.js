/*
Deep equality is similar to shallow equality, but with one difference. During the object check, if the values being compared are objects, then a recursive equality check is performed on these nested objects.
*/

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}

/*
The highlighted line areObjects && !deepEqual(val1, val2) indicates that as soon as the compared properties are objects, a recursive call starts to verify whether the nested objects are equal too.
*/
const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
    postCode: 9008
  }
};

const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
    postCode: 9008
  }
};

const hero3 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
    postCode: 9007
  }
};

const hero4 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
    postCode: 9007,
    contact : {
      mob: 9098989999,
      landline: 0989878
    }
  }
};

console.log('deepEqual(hero1, hero2) : '+deepEqual(hero1, hero2)); // => true
console.log('deepEqual(hero1, hero3) : '+deepEqual(hero1, hero3)); // => false
console.log('deepEqual(hero1, hero4) : '+deepEqual(hero1, hero4)); // => false

/*
To deeply compare objects I recommend to use:

    isDeepStrictEqual(object1, object2) of Node built-in util module
    or _.isEqual(object1, object2) of lodash library.

*/
