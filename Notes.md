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

