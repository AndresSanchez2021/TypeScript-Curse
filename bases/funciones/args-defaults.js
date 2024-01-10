"use strict";
(() => {
    const fullName = (firtsName, lastName, upper = false) => {
        if (upper)
            return `${firtsName} ${lastName || 'no last name'}`.toUpperCase();
        return `${firtsName} ${lastName || 'no last name'}`;
    };
    const name = fullName('tony');
    console.log({ name });
})();
