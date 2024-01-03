"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'];
    const numbersAndStrings = [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'];
    numbersAndStrings.push(true);
    const villians = ['Omega', 'Dormammu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toLocaleUpperCase()));
})();
