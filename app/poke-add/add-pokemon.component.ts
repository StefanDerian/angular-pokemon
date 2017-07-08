import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Pokemon} from'./shared/pokemon';
import {PokemonService} from '../shared/pokemon.service';
@Component({
	moduleId: module.id,
	selector: 'add-pokemon',
	templateUrl: 'add-pokemon.template.html'
})
export class AddPokemonComponent {

	formPokemon:any = {};
	cardTitle: string = "Add Pokemon";
	errorMessage:string;

	savePokemon(formValues:any){
		this.pokemonService.addPokemon(formValues)
		.subscribe(
			res=>{
				console.log('pokemon saved');
				this.router.navigate(['/']);
			}.
			error => console.log('error',error)


			)
	}


	constructor(private pokemonService:PokemonService, private router:Router) {}

}