import { Pokemon } from './../../../entities/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-component',
  templateUrl: './pokemon-card-component.component.html',
  styleUrls: ['./pokemon-card-component.component.css']
})
export class PokemonCardComponentComponent {

  @Input() pokemon! : Pokemon

  openPage(){
    alert(`O id selecionado é: ${this.pokemon.GetId()}`)
  }

}
