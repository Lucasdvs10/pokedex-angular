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

  private async FetchPokemon() {
    for (let i = 1; i <= 152; i++) {
      let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      let jsonResponse = await data.json();

   


      let pokemon = new Pokemon(jsonResponse["name"], jsonResponse["id"],["lorem"] , jsonResponse["sprites"]["front_default"],jsonResponse["height"], jsonResponse["weight"])

      this.AddPokemonInList(pokemon);
    }
  }

  public async GetPokemonsList() {
    await this.FetchPokemon();
    return this.pokemonsList;
  }
}

