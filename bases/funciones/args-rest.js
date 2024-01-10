"use strict";
//REST en este caso viene del resto de argumentos, 
//en este caso lla func puede pedir solo un arg pero al momento de usarla se le 
//pueden agregaar mas de uno, ahi es cuando entra esto
(() => {
    const fullName = (fisrtsName, ...restArgs) => {
        return `${fisrtsName} ${restArgs.join(" ")}`;
    };
    console.log(fullName("Clark", "Ken"));
})();
