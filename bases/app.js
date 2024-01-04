"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let force;
    (function (force) {
        force[force["Acuaman"] = 0] = "Acuaman";
        force[force["Batman"] = 1] = "Batman";
        force[force["Flash"] = 5] = "Flash";
        force[force["Superman"] = 100] = "Superman";
    })(force || (force = {}));
    const fuerzaFlash = force.Flash;
    const fuerzaSuperman = force.Superman;
    const fuerzaBatman = force.Batman;
    const fuerzaAcuaman = force.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
