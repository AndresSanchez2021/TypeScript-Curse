"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWoorld = () => `El mundo está salvado`;
    /* myFunction = 10;
    console.log(myFunction); */
    /* let myFunction : (x:number, y:number) => number;
    myFunction = addNumbers
    console.log(myFunction(1,2)) */
    /* let myFunction : (x:string) => string;
    myFunction = greet
    console.log(myFunction('1')) */
    let myFunction;
    myFunction = saveTheWoorld;
    console.log(myFunction());
})();
