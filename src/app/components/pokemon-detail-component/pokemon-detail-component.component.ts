import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/entities/pokemon';

@Component({
  selector: 'app-pokemon-detail-component',
  templateUrl: './pokemon-detail-component.component.html',
  styleUrls: ['./pokemon-detail-component.component.css']
})
export class PokemonDetailComponentComponent implements OnInit {

  pokemon! : Pokemon

  constructor() { 
    
  }

  async mockPokemon(){
    
      let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${152}`);
      let jsonResponse = await data.json();

       this.pokemon = new Pokemon(jsonResponse["name"], jsonResponse["id"], ["lorem ipson"], jsonResponse["sprites"]["front_default"], jsonResponse["height"], jsonResponse["weight"])
    
  }

  ngOnInit(): void {
    this.mockPokemon()
  }

}
