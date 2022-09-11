import { FetchPokemonsService } from './../../services/fetch-pokemons-service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/entities/pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail-component',
  templateUrl: './pokemon-detail-component.component.html',
  styleUrls: ['./pokemon-detail-component.component.css']
})
export class PokemonDetailComponentComponent implements OnInit {

  pokemon! : Pokemon
  pokemonId! : number

  constructor(private fetchPokemonService : FetchPokemonsService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.pokemonId = +params['id']

      this.fetchPokemonService.GetPokemonById(this.pokemonId).then(pokemonResponse => {
        this.pokemon = pokemonResponse
      })
    })    

  }

}
