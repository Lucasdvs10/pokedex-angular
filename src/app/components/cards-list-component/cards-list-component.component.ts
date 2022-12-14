import { FetchPokemonsService } from './../../services/fetch-pokemons-service';
import { Pokemon } from './../../../entities/pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list-component',
  templateUrl: './cards-list-component.component.html',
  styleUrls: ['./cards-list-component.component.css'],
})
export class CardsListComponentComponent implements OnInit {
  pokemonsList!: Pokemon[];

  constructor(private fetchPokemonsService: FetchPokemonsService) {}

  async InitializePokemonsList() {
    this.fetchPokemonsService.GetPokemonsList(152).then((response) => {
      this.pokemonsList = response;
    });
  }

   ngOnInit() {
    this.InitializePokemonsList();
  }
}
