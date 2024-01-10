"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activate = () => {
        return 'se activa';
    };
    console.log(typeof (activate));
    const heroName = returnName();
})();
