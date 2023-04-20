
// Manual Comparison
function isStudentEqual(object1, object2) {
     let isEqual = object1.name === object2.name;
     return isEqual;
  }
  const student01 = {
    name: 'Sreejith'
  };
  const student02 = {
    name: 'Sreejith'
  };
  const student03 = {
    name: 'Kumaran'
  };
  console.log('isStudentEqual(student01, student01) : '+isStudentEqual(student01, student01)); // => true
  console.log('isStudentEqual(student01, student01) : '+isStudentEqual(student01, student02)); // => true
  console.log('isStudentEqual(student01, student01) : '+isStudentEqual(student01, student03)); // => false
  /*
. Such functions have good performance — only a few property accessors and equality operators are involved in the comparison.

Manual comparison requires manual extraction of properties — for simple objects, that's not a problem. But to compare bigger objects (or objects of unknown structure), the manual comparison isn't convenient because it requires a lot of boilerplate code.
*/
