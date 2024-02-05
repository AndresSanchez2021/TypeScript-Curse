

//Generics

/* En la siguiente funcion  ocurrira un error al llamarla y pasarle cualquier tipo de argumento 
pues no podremos usar los mismo metodos en un string que en un number  */
export const printObject = (argument:any)=>{
  return argument
}


/* 👇👇Ahora, en la siguiente funcion se hara un auto reconocimiento del tipo y el mismo compilador
le sugerira al usuario las funciones que estan disponibles para usar con el tipo de dato, cosa contraria pasaba con el anterior pues 
no daba ninguna sugerencia 👇👇 */
export function printObjectGeneric<T>(argument:T){
  return argument
}

export const printObjectGenericArrow = <T>(argument:T) => argument