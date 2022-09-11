import { PokemonDetailComponentComponent } from './components/pokemon-detail-component/pokemon-detail-component.component';
import { CardsListComponentComponent } from './components/cards-list-component/cards-list-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CardsListComponentComponent},
  {path: 'pokemon-details/:id', component: PokemonDetailComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
