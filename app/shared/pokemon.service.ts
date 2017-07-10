import { Injectable ,NgModule } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {


	private pokemonUrl:string = 'api/pokemons2';


	constructor(private _http: Http) { }


	addPokemon(pokemon: any):Observable<Pokemon>{

		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});
		let body = JSON.stringify(pokemon);
		let url = `${this.pokemonUrl}`;

		return this._http.post(url,body,options)
		.map((response:Response)=>{
			return response.json();
		})
		.do(data=>console.log(data))
		.catch(this.handleError)

		;

	}

	getPokemons():Observable<Pokemon[]>{
		return this._http.get(this.pokemonUrl).map((res:Response)=><Pokemon[]> res.json().data)
		.do(data=>console.log(data))
		.catch(this.handleError);
	}


	deletePokemon(pokemon:Pokemon): Observable<Response>{
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});
		let url = `${this.pokemonUrl}/${pokemon.id}`;


		return this._http.delete(url,options).catch(this.handleError);


	}


	private handleError(error:Response){
		let msg = `Error status ${error.status} status ${error.statusText} at ${error.url}`;
		return Observable.throw(msg);
	}

}