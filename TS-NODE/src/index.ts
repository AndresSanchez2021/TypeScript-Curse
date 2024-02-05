import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Fin de get-pokemon"))
