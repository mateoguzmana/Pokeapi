import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../../services/pokemons/pokemons.service';

@Component({
  selector: 'my-pokemons-details',
    templateUrl: `app/components/pokemons/details/details-component.html`
})
export class DetailsComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  Pokemon: Object;
  Name: String;
  Height: Number;
  Weight: Number;
  Ability: String;

  constructor(private pokemonsService: PokemonsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });

    this.pokemonsService.getPokemon(this.id).subscribe((result) => {
        this.Pokemon = result;
        this.Name = this.Pokemon["name"];
        this.Height = this.Pokemon["height"];
        this.Weight = this.Pokemon["weight"];
        this.Ability= this.Pokemon["abilities"][0]["ability"]["name"];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}