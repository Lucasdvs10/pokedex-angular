import { Pokemon } from '../../entities/pokemon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchPokemonsService {
  private pokemonsList: Pokemon[] = [];

  private AddPokemonInList(pokemon: Pokemon): void {
    this.pokemonsList.push(pokemon);
  }

  constructor() {}

  public async GetPokemonsList(numberOfPokemons : number) {
    await this.FetchPokemon(numberOfPokemons);
    return this.pokemonsList;
  }

  public async GetPokemonById(id : number){
      let jsonResponse = await this.GetPokemonJson(id)
      return new Pokemon(jsonResponse["name"], jsonResponse["id"],["lorem"] , jsonResponse["sprites"]["front_default"],jsonResponse["height"], jsonResponse["weight"])
  }

  private async GetPokemonJson(pokemonId: number) {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    let jsonResponse = await data.json();
    return jsonResponse;
  }
  private async FetchPokemon(numberOfPokemons : number) {
    for (let i = 1; i <= numberOfPokemons; i++) {
      let pokemon = await this.GetPokemonById(i)

      this.AddPokemonInList(pokemon);
    }
  }

}

