import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Pokemon} from '../shared/pokemon';
import {PokemonService} from '../shared/pokemon.service';
import {ModalDirective} from 'ng2-bootstrap';
import {PokemonModalComponent} from './pokemon-modal.component';
@Component({
	moduleId: module.id,
	selector: 'pk-list',
	templateUrl: 'list-pokemons.template.html'
})
export class ListPokemonsComponent implements OnInit {




	@ViewChild('childModal') public childModal:PokemonModalComponent;
	pokemon:Pokemon[];
	errorMessage:string;

	constructor(private pokemonService:PokemonService
		private viewContainerRef:ViewContainerRef) {}


	selectedPokemonLoaded: boolean = false;
	pokeDetails:Pokemon;




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


	viewSinglePokemon(id:number){
		this.pokemonService.getPokemonDetails(id)
		.subscribe(

			(pokemon:Pokemon) => {
				this.pokeDetails = pokemon;
				
				this.childModal.show();
			},
			error => this.errorMessage = <any> error

			)
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