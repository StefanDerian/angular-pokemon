import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../shared/pokemon';
import {PokemonService} from '../shared/pokemon.service';


@Component({
	moduleId: module.id,
	selector: 'pk-list',
	templateUrl: 'list-pokemons.template.html'
})
export class ListPokemonsComponent implements OnInit {

	pokemon:Pokemon[];
	errorMessage:string;

	constructor(private pokemonService:PokemonService) {}

	ngOnInit() {
		// get all pokemons
		this.getPokemons();
	}

	getPokemons(){
		this.pokemonService.getPokemons()
		.subscribe(
			(pokemon:Pokemon[])=>{
				console.log(pokemon);
				this.pokemon = pokemon;
			},
			error => this.errorMessage = <any> error
			);
	}


	deletePokemon(pokemon:Pokemon){
		this.pokemonService.deletePokemon(pokemon).subscribe(
			() => {},
			error => this.errorMessage = <any> error,
			() => {
				this.getPokemons();
			}
			);
	}
}