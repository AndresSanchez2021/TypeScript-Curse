(()=>{
  
  /* Los constructores privados son usados para constrolar la manera en la cual 
  sus instacias son ejecutadas */

  /* Entonces la usaremos para manejar singletons, es decir solo se manejara un instancia
  y solo se creara una sola vez en caso de ser llamada  */

  class Apocalipsis{
    /* El constructor con palabras reservada private solo podra ser llamado dentro de la misma clase */
    private constructor(public name:string){

    }

    static instance:Apocalipsis;

    static callApocalipsis():Apocalipsis{
      if(!Apocalipsis.instance){
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis")
      }
      return Apocalipsis.instance; 
    }

  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();


  /* Este patron singleton no es muy usado hoy en dia */

})()