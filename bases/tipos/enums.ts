//vamos a ver enumercion (solo exite en TS)
//SU FUNCION: poner los valores permitidos para una variable
// y que se respete los valores que la numeración permite
//es solo una manera de manejar numeros entonces no permite usar strings
(()=>{
  enum AudioLevel {
    min,
    medium,
    max
  }
  let currentAudio = AudioLevel.min;
  console.log(currentAudio)
  console.log(AudioLevel)


  } 
)()