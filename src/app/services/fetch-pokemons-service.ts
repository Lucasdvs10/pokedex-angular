import { Pokemon } from '../../entities/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchPokemonsService {
  private pokemonsList: Pokemon[] = [];

  private AddPokemonInList(pokemon: Pokemon): void {
    this.pokemonsList.push(pokemon);
  }

  constructor(private apiClient: HttpClient) {}

  async fetchPokemon() {
    for (let i = 1; i <= 152; i++) {
      let observableClient = this.apiClient.get<any>(
        `https://pokeapi.co/api/v2/pokemon/${i}`
      );

      observableClient.subscribe(async (apiResponse) => {
        let pokemon = await new Pokemon(
          await apiResponse['name'],
          await apiResponse['id'],
          ['lorem ipson'],
          await apiResponse['sprites']['front_default']
        );

        this.AddPokemonInList(pokemon);

        console.log(pokemon.GetNome());
      });
    }
  }

  public async GetPokemonsList() {
    await this.fetchPokemon();
    return this.pokemonsList;
  }
}
