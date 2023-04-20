/*
 static variable is a class property used by the class itself rather than by any instances of the class. The static variable is declared using the “static” keyword. It will have a single static value that is set during initialization. In JavaScript, a static variable is created to avoid duplication, it is useful for caches and fixed configuration.

Static Variables in JavaScript
Use the “static” keyword to create a static function or a variable. The static variables have a global scope and are initialized during runtime. They are accessible throughout the entire script with the help of the class name. Use the “this” keyword to invoke a static method or a variable within a static method.
 
 */

class MyExampleClass{
    static a = 'This is static variable';

    static exampleMethod(){
        return 'This is static method';
    }

    static dispalyData(){
        return this.a+" - from displayData()";
    }
}

console.log(MyExampleClass.a);
console.log(MyExampleClass.exampleMethod());
console.log(MyExampleClass.dispalyData());



/*
Conclusion

In JavaScript, the static variables and functions are created using the “static” keyword. It is the property of an object that is used by the class itself instead of its instances. It will have a single static value and is initialized during runtime. For calling the static variables, there is no need to create an instance or an object of the class because it will be called using the class name. The static variables are called within a static method, using the “this” keyword. In this post, we described the JavaScript static variables and how to access them. 
*/