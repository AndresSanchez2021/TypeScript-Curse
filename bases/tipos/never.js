"use strict";
(() => {
    //Never: significa que mi función no deberia terminar exitosamente 
    //funcion que va a terminar con un error
    const abc = (mesagge) => {
        throw new Error("mesagge");
    };
    abc('auxilio');
})();
