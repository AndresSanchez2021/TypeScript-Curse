(()=>{

  //Evitar usar var porque trae muchos errores en este caso la clase nos mostraba
  //como a pesar de ser llamada antes de la declaracion no mandaba error
  
  //console.log(a)
  //var a = "Andres"

  //LET si respeta el orden de la declaracion, es decir no lo manda al scope global
  let a = "Andres"
  console.log(a)


})()