(()=>{
  let flash ={
    name:'Barry Alan',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }

  /* TS lo que hizo fue crear un nuevo tipo con
    - name: string,
    - age : number,
    - poders : string[]
    Por eso si vamos volveer a difinir los valores de nuestra variable 
    nos mandara un error, pues tenemos que cumplir conn todas
    las propiedades que nos pide el nuevo tipo que creamos no podemos dejarlo solo con name
  */

  //flash = {
  //  name : "Clark Kent"
  //}

  /* ↑↑  Aqui podemos ver el error generado por no completar 
  los parametro que nos pedia el tipo que se acabo de crear */

  flash = {
    name: 'Clark Kent',
    age: 35,
    powers:[]
  }   
  
  /* ↑ aqui ya quedo bien */


  let Batman: {name:string, age?:(number | string ), powers:string[], getName?:()=> string } ={
    name:'Brus Wayne',
    age: 35,
    powers: ['Super inteligencia', 'Dinero', 'Agilida']
  }

  /* Ahora queremos definirle una funcion dentro de Batman */

  Batman ={
    name:'Brus Wayne',
    age: 35,
    powers: ['Super inteligencia', 'Dinero', 'Agilida'],
    getName(){
      return this.name;
    }
  }

  




})()