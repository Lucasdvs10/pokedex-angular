import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponentComponent } from './components/pokemon-card-component/pokemon-card-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsListComponentComponent } from './components/cards-list-component/cards-list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponentComponent,
    CardsListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
