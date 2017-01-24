import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PokemonsService {

  constructor(private http: Http) {}

  getPokemons() {

    return this.http
      .get(
        'http://pokeapi.co/api/v2/pokemon/'
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }
  
  getPokemon(id) {
    return this.http
      .get(
        'http://pokeapi.co/api/v2/pokemon/'+id
      )
      .map(res => res.json())
      .map((res) => {
        return res;
      });
  }

}