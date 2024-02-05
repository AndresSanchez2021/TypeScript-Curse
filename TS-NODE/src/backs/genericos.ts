import { printObject, printObjectGeneric, printObjectGenericArrow } from "../generics/generics";
import { Villian, Hero } from "../interfaces";



console.log(printObject("Hola"))
 console.log( printObjectGeneric("Hola".toUpperCase))
 console.log( printObjectGeneric(3.14.toFixed(2)))
 console.log( printObjectGeneric(new Date().getDate()))

const deadpool = {
  name:'Deadpool',
  realName:  'Wade Winston',
  dangerLevel: 130 
}

console.log(printObjectGenericArrow<Villian>(deadpool))