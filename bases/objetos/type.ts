(()=>{

  /* type nunca se va a pasar al archivo de javascript 
  es decir que no hay una contraparte, cuando se transpile no va a pasar a JS */

  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: ()=>string;
  }

  /* Ahora con esto estariamos estandarizando el tipo a usar en otros lados sin
  la necesidad de cambiar uno por uno  */


  let Batman: Hero ={
    name:'Brus Wayne',
    age: 35,
    powers: ['Super inteligencia', 'Dinero', 'Agilida']
  }

  let SpiderMan: Hero ={
    name:'Brus Wayne',
    age: 35,
    powers: ['Super inteligencia', 'Dinero', 'Agilida'],
    getName(){
      return this.name;
    }
  }

  console.log(Batman)
})()