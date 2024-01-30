(() => {


  /* una clase abstrata basicamente se utiliza para que otras clases
  extiendan de la misma, por este motivo esta clase abstracta no podra ser creadora 
  de  nuevas instancias */

  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string
    ){
      
    }
  }

  class Xmen extends Mutante{
    salvarMundo(){
      return 'Mundo salvado'
    }
  }
  class Foe extends Mutante{
    conquistarMundo(){
      return 'Mundo conquistado'
    }

  }


  const wolverine:Mutante = new Xmen ("Wolverine", "Logan");	
  const magneto:Mutante = new Foe ("Magneto", "Magnus");	



  /* Ahora las instancias creadas con las clases Xmen y Foe al extender de Mutante podran
  tener la misma firma que Mutante y entonces wolverine y magneto seran reconocidos como mutantes */

  const printName =(character : Mutante)=> console.log(character.name)

  printName(wolverine);

})();
