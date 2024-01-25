(()=>{
  type Avenger = {
    name : string,
    weapon: string 
  }


  const ironman:Avenger = {
    name : "Ironman",
    weapon : "armor"  
  }

  const cap:Avenger = {
    name : "capAmerica",
    weapon : "armor"  
  }

  const thor:Avenger = {
    name : "thor",
    weapon : "hammer"  
  }

  const avengers = [ironman, cap, thor]

  /* Barre el arreglo y toma cada uno de los valores en la variable y se la asigna a la constante que definimos */

  for (const iterator of avengers) {
    console.log({iterator})    
  }



})()