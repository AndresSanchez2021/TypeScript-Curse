"use strict";
(() => {
    const fullName = (firtsName, lastName) => {
        if (!firtsName) {
            throw new Error('Nombre no requerido ');
        }
        return `${firtsName} ${lastName}`;
    };
    const name = fullName('tony', 'stark');
    console.log({ name });
})();
