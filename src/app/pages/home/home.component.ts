import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import {Store} from "@ngrx/store";
import {PokemonState} from "../../ngrx/state/pokemon.state";
import {getPokemon} from "../../ngrx/action/pokemon.actions";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import * as PokemonActions from "../../ngrx/action/pokemon.actions";
import { PokemonModel } from '../../model/pokemon.model';
import { GenerationState } from '../../ngrx/state/generation.state';
import * as GenerationActions from "../../ngrx/action/generation.actions";
import {AsyncPipe} from "@angular/common";
import { DetailComponent } from './components/detail/detail.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    DetailComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'untitled';

  $generation = this.store.select((state) => state.generation.pokemon_species);
  $pokemon = this.store.select((state) => state.pokemon.pokemon);
  $pokemonDetail = this.store.select((state) => state.pokemon.detailPokemon);
  Pokemon: PokemonModel = {
    name: '',
    image: '',
    order: 0,
    sprites: {
      back_default:''
    },
  }
  pokemon!: PokemonModel;

  constructor(private store: Store<{
                generation: GenerationState,
                pokemon: PokemonState,
              }>,private router: Router
  ) {
  }
  @ViewChild('appDialog', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog(selectedPokemon: PokemonModel) {
    this.pokemon = selectedPokemon;
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }
  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }
  ngOnInit() :void {
    this.store.dispatch(GenerationActions.getGeneration({ id: 1 }));
    this.$generation.subscribe((data) =>
      data.forEach((element) => {
        this.store.dispatch(
          PokemonActions.getPokemon({ name: element.name})
        );
        this.store.dispatch(
          PokemonActions.getPokemonDetail({ name: element.name})
        );
        // console.log(this.$pokemon);
      }),
    );


  }
  getPokemonByName(name: string) {
    this.router.navigate(['home/detail', name]);
  }
}
