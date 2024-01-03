(()=>{
 //Never: significa que mi función no deberia terminar exitosamente 
 //funcion que va a terminar con un error
 
  const abc = (mesagge:string):never =>{
    throw new Error("mesagge")
  };
  abc('auxilio');
})()