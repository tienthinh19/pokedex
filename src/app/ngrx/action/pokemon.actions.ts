import {createAction, props} from "@ngrx/store";
import {PokemonModel} from "../../model/pokemon.model";

export const getPokemon=createAction(
  '[Pokemon] Get Pokemon',
  props<{ name: string }>()
);
export const getPokemonSuccess=createAction(
  '[Pokemon] Get Pokemon Success',
    props<{ pokemon: PokemonModel[] }>()
);

export const getPokemonFailure=createAction(
  '[Pokemon] Get Pokemon Failure',
  props<{ error: string }>()
);
export const getPokemonDetail=createAction(
  '[Pokemon] Get Pokemon Detail',
  props<{ name: string }>()
);
export const getPokemonDetailSuccess=createAction(
  '[Pokemon] Get Pokemon Detail Success',
  props<{ pokemon: PokemonModel }>()
);
export const getPokemonDetailFailure=createAction(
  '[Pokemon] Get Pokemon Detail Failure',
  props<{ error: string }>()
);
