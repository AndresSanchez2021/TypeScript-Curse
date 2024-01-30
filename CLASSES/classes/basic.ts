(()=>{

  /* pequeño repaso del uso del private, public y static 
  para usar en funciones y variables  */


  // Ademas vemos una manera de declarar un atributo directamente dentro del constructor 

  class Avenger {
    // private name:string;   <<-- clase paso a ser declarada dentro del constructor
    public team: string;
    public realName?: string;
    static avgAge:number= 35;
    static getNameClass(){
      return this.name;
    }

    constructor( public name:string, team:string, realName?:string){
      this.name = name;
      this.team = team;
      this.realName = realName;
    }

    public bio(){
      return `${this.name} (${this.team})!!`
    }
  }
  const  antMan = new Avenger("ant man", "capitan");



})()