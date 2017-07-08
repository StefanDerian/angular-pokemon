import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';

import {PokemonData} from './shared/pokemon-data';

import  {AddPokemonComponent} from './poke-add/add-pokemon.component';
import  {ListPokemonsComponent} from './poke-list/list-pokemons.component';

import {PokemonService} from './shared/pokemon.service';

import './shared/rxjs-extension';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                    HttpModule,
                    InMemoryWebApiModule.forRoot(PokemonData)
                   ],
  declarations: [ AppComponent,
                          HomeComponent,
                          NavbarComponent,
                          AddPokemonComponent,
                          ListPokemonsComponent
                          ],
  providers: [ PokemonService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }