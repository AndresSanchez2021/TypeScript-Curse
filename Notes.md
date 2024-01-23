//Microsoft fue el creador de TypeScript

**TRANSFORMAR DE TS A JS**
*en consola*
tsc “nombre archivo”
tsc app

**INICIALIZAR TSCONFIG**
*en consola*
tsc –init
ahora solo haciendo “tsc”  en consola podemos transpirar todos los archivos en formato .ts a .js

**ACTIVAR MODO OBSERVADOR**
*en consola*
tsc –watch or tsc -w


**FUNCTION QUE SE AUTO INVOCA**
(()=>{

})()

**RETORNO DE UNA FUNTION**
function ():number{
  ...
}

():void=>{}

significa entonces que la function retornara un tipo number o void 


**PERMITIR ASIGNAR VALOR UNDEFINED A VARIABLES**
*ir al archivo de tscoonfig y  buscar strictNullChecks 
  -cambiar ese valor a 'false'



**REFERENCIAR LAS LINEAS DE ERROR DE TS DIRECTAMENTE NO LAS DE JS**




**DEPURACION DE CODIGO**
 buscamos en el tsconfig sourceMap y le asigmamos true, finalmente lo descomentamos


 **ELIMINAR LOS COMENTARIOS DE LA VERSION FINAL DE JS**
 buscamos en el tsconfig removeComments y le asigmamos true, finalmente lo descomentamos


 **EVITAR QUE TS TOME DIRECTORIOS PARA TRANSPILAR**
  node_modules siempre esta excluido por defecto en las nuevas versiones

  "exclude": [
    'node_modules/*.ts'
  ]


  **INCLUIR QUE TS TOME DIRECTORIOS PARA TRANSPILAR**

  "include": [
    'node_modules/*.ts'
  ]

  
  **OUTFILE**
  Es molesto cunado se generan los .maps de cada archivo, cuando se trabaja con frameworks este se encarga de que se genere un unico archivo js con toda la recopilacion de la info de los TS

  para que se genere ese archivo tenemos que ir al tsconfig y cambiar la siguiente linea con el nom,bre del archivo que queremos

  // "outFile": "./",  ->  "outFile": "./main.js",  

  tambien la linea que dice

  
  "module": "commonjs",   ->  "module": "amd", 

  puede que quede un pequño error pero se deberia quitar luego (automaticamente)

  si hay algo incluido con "include" entonces debemos quitarlo o modificarlo porque eso significa que eso que señalamos sera lo unico que queremos incluir, por lo cual puede generar conflictos con nuestro /main.js que acabamos de indicar 
 
