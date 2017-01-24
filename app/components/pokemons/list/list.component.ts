import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../../../services/pokemons/pokemons.service';

@Component({
    selector: 'my-pokemons-list',
    templateUrl: `app/components/pokemons/list/list.component.html`
})
export class ListComponent {

Pokemons: Object;

  constructor(private pokemonsService: PokemonsService) {

    this.getPokemons();

  }

  getPokemons(){
      this.pokemonsService.getPokemons().subscribe((result) => {
        this.Pokemons = result["results"];
      });
  }


}