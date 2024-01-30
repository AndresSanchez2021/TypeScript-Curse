(()=>{
  class Avenger{
    constructor(
      public name:string,
      public realName:string
      ){
      console.log(`name: ${name}`)
    }

    private getFullName(){
      return `${this.name} + ${this.realName}`
    }

    protected greetings(){
      console.log(`${name} say hello`)
    }
  }

  /* si no se llama a un constructor dentro de la clase que extiede entonces automaticamente este  */
  /* llaamara al que se usa en su super */

  // 👇👇En el caso siguiente llamara al contructor de Avenger 
  /* class Xmen extends Avenger{

  } */
  //const wolverine = new Xmen("Wolverine","Logan");

  // En el siguiente se llamara al propio constructor 
  
  class Xmen extends Avenger{
    constructor(
      name:string, 
      relaName:string,
      public isMutan : boolean
    ){
      super(name,relaName)
    }
    private greatingXmen(){
      console.log("Jellouuuu")
    }

    get fullName(){
      return `${this.name}`
    }
    set fullName(newName:string){
      this.name = newName;
    }
  }

  /* El protected entonces va apermitir que los metodos sean usados dentro de la
  misma clase y en clases que extiendadn de la misma */


  /* El private solo va a permitir que el meetodo o la propiedad sea visible
  dentro de la misma clase */

  const wolverine = new Xmen("Wolverine","Logan", true);
  wolverine.isMutan






})()