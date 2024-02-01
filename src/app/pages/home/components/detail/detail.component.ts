import { Component, Input } from '@angular/core';
import { PokemonModel } from '../../../../model/pokemon.model';
import { PokemonState } from '../../../../ngrx/state/pokemon.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as PokemonActions from "../../../../ngrx/action/pokemon.actions";
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  $pokemon = this.store.select((state) => state.pokemon.detailPokemon);
  @Input() pokemons!: PokemonModel;
  constructor(private store:Store<{ pokemon:PokemonState }>,private activeRouter:ActivatedRoute) {

    let name=this.activeRouter.snapshot.params['name'];
    console.log(name);
    this.store.dispatch(
      PokemonActions.getPokemonDetail({
        name: name
      })
    )
    this.$pokemon.subscribe((data) => {
      this.pokemon = data;
      console.log(this.pokemon);
    })


  }
  pokemon:any;
}
