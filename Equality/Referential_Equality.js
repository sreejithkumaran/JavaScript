/*
JavaScript provides 3 ways to compare values:

    The strict equality operator ===
    The loose equality operator ==
    Object.is() function

When comparing objects using any of the above, the comparison evaluates to true only if the compared values refer to the same object instance. This is referential equality.
*/

const hero1 = {
    name: 'Batman'
  };
  const hero2 = {
    name: 'Batman'
  };

  hero1 === hero1; // => true  // both operands point to the same object instance
  hero1 === hero2; // => false  // operands hero1 and hero2 are different object instances.
  hero1 == hero1; // => true
  hero1 == hero2; // => false

  Object.is(hero1, hero1); // => true
  Object.is(hero1, hero2); // => false

/*
Interestingly hero1 and hero2 objects have the same content: both have one property name with the value 'Batman'. Still, even comparing objects of the same structure, hero1 === hero2 evaluates to false.

Referential equality is useful when you'd like to compare object references, rather than their content.
*/
