import axios from "axios";
import { PokemonI } from "../interfaces";

export const getPokemon = async (pokemonId: number): Promise<PokemonI> => {
  const resp = await axios.get<PokemonI>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  console.log(resp.data.abilities[0].ability.url);

  return resp.data;
};
