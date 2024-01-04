(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano : [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum force{
      Acuaman=0,
      Batman= 1,
      Flash = 5,
      Superman = 100
    }
    const fuerzaFlash:force = force.Flash;
    const fuerzaSuperman:force = force.Superman;
    const fuerzaBatman:force = force.Batman;
    const fuerzaAcuaman:force = force.Acuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number =(poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  