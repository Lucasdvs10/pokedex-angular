import { Pokemon } from '../../entities/pokemon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchPokemonsService {


  private pokemonsList : Pokemon[] = [
  ]
  
  private AddPokemonInList(pokemon : Pokemon) : void{
    this.pokemonsList.push(pokemon)
  }


  public FetchPokemonsList() : Pokemon[]{
    return this.pokemonsList
  }

}




  // new Pokemon("Squirtle", 7, ["Água"], "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"),
  // new Pokemon("Wartotle", 8, ["Água"], "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"),
  // new Pokemon("Blastoise", 9, ["Água"], "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"),
  // new Pokemon("Cartepie", 10, ["Água"], "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png")