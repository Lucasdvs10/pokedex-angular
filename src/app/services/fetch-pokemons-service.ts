import { Pokemon } from '../../entities/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchPokemonsService {


  constructor(private apiClient : HttpClient){
  }

  private pokemonsList : Pokemon[] = [
  ]
  

  private async MakeRequest(){
    let request = await this.apiClient.get<any>("https://pokeapi.co/api/v2/pokemon/charmander")



  }

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