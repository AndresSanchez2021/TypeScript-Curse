"use strict";
(() => {
    const fullName = (firtsName, lastName) => {
        return `${firtsName} ${lastName || 'no last name'}`;
    };
    const name = fullName('tony');
    console.log({ name });
})();
