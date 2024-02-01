import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PokemonService} from "../../services/pokemon.service";
import {catchError, map, mergeMap, switchMap} from "rxjs";
import * as PokemonActions from "../action/pokemon.actions";
import { PokemonModel } from "../../model/pokemon.model";
@Injectable()
export class pokemonEffects {
  constructor(private actions$: Actions, private pokemonService: PokemonService) {
  }

  pokemon$ = createEffect(() => this.actions$.pipe(
    ofType(PokemonActions.getPokemon),
    mergeMap((action) =>
      this.pokemonService.getPokemonByName(action.name)
        .pipe(
          map((pokemon: any) =>
            PokemonActions.getPokemonSuccess({ pokemon: [pokemon] })),
          catchError((error) => [PokemonActions.getPokemonFailure({error})])
        ))
  ))
  pokemonDetail$ = createEffect(() => this.actions$.pipe(
    ofType(PokemonActions.getPokemonDetail),
    switchMap((action) =>
      this.pokemonService.getPokemonByName(action.name)
        .pipe(
          map((pokemon: any) =>
            PokemonActions.getPokemonDetailSuccess({ pokemon: pokemon as PokemonModel })),
          catchError((error) => [PokemonActions.getPokemonDetailFailure({error})])
        ))
  ))


}
