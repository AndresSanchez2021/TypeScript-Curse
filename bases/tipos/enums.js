"use strict";
//vamos a ver enumercion (solo exite en TS)
//SU FUNCION: poner los valores permitidos para una variable
// y que se respete los valores que la numeración permite
//es solo una manera de manejar numeros entonces no permite usar strings
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    /* enum AudioLevel {
      min = 1,
      medium = 2,
      max  = 3
    } */
    let currentAudio = AudioLevel.min;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
