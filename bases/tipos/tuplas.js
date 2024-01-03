"use strict";
(() => {
    //Vammos a  ver que como podemos definir las tuplas, aun que tambien se pueden hacer conjuntos mas grande
    // es decir podemos agrupar de a 2 (tuplas) o mas conjuntos 
    //sin embargo el nombre siempre son tuplas
    //marcara error si el valor que ponemos no corresponde a el tipoo de  cada posición 
    const hero = ['Dr Strange', 100, false];
    hero[0] = '00';
    hero[1] = 10;
    hero[2] = true;
})();
