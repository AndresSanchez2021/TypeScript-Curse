"use strict";
(() => {
    //VOID, si una function no retorna deberia valer undefine
    //es diferente undefiined que void
    function callBatman() {
        return;
    }
    const a = callBatman();
    console.log(a);
    const callSuperman = () => {
    };
})();
