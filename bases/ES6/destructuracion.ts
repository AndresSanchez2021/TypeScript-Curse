(()=>{
  /* Es propiedad se implementa por defecto apartir del ES6(2016) antes no se hacia de esa manera 
  es decir que en la transpilacion va a quedar  de la misma maanera literal*/


  const avengers = {
    nick:"Samuel",
    ironman:"Robert JR",	
    vision:"Pauol",
    activo:true,
    poder:150
  }


  const {poder, vision} =avengers


  /* En este punto los tipos de cada  valor se abstraen pero 
  al usarse dentro de una funcion se perdera la refencia de aquel objeto es decir */

  //const printAven  = (avenger) => console.log(avenger.nick)

  /*☝☝ En este caso sale el error porque se esta entendiendo que el valor recibido pude ser cualquiera (any)*/


  /*👇👇 para eso entonces debemos crear un tipo nuevo he implememtaremos */


  type heroType = {  
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const heroes:heroType=  {
    nick:"Samuel",
    ironman:"Robert JR",	
    vision:"Pauol",
    activo:true,
    poder:150
  }
  
  /* Con el type nuevo entonces podramos hacer esto 👇👇 */
  //const printAven  = (heroes: heroType) => console.log(heroes.nick)


  /* pero aun mejor podremos hacer lo siguiente con la destructuracion 👇👇*/
  const printAven  = ({ironman,vision, ...resto}: heroType):any => {
    console.log(resto.nick)
    console.log(ironman)
  }

  // ARREGLOS

  const avengerArr = ['cap America','ironman', 'vision',''];
  const [ ,robert  ] = avengerArr;

  

})()