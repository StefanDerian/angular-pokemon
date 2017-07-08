import { Injectable ,NgModule } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {


	private pokemonUrl:string = 'api/pokemons_25.json';


	constructor(private _http: Http) { }



	getPokemons():Observable<Pokemon[]>{
		return this._http.get(this.pokemonUrl).map((res:Response)=><Pokemon[]> res.json())
		.do(data=>console.log(data))
		.catch(this.handleError);
	}

	private handleError(error:Response){
		let msg = 'Error status ${error.status} status ${error.statusText} at ${error.url}';
		return Observable.throw(msg);
	}

}