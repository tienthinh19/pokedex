import {PokemonState} from "../state/pokemon.state";
import {createReducer, on} from "@ngrx/store";
import {
  getPokemon,
  getPokemonDetail, getPokemonDetailFailure,
  getPokemonDetailSuccess,
  getPokemonFailure,
  getPokemonSuccess
} from "../action/pokemon.actions";
import {PokemonModel} from "../../model/pokemon.model";

export const initializState: PokemonState = {
  pokemon: [],
  loading: false,
  error: '',
  detailPokemon: {

    name: '',

    image: '',
    order: 0,
    sprites: {
      back_default: ''
    },
  }
}
export const pokemonReducer = createReducer(
  initializState,
  on(getPokemon, state => ({...state, loading: true})),
  on(getPokemonSuccess, (state,
                         {pokemon, type}) =>
    {

      let pokemons = [
        ...state.pokemon,
        ...pokemon
      ]
      // console.log(pokemons)
      return {
        ...state,
        pokemon: pokemons,
        loading: false,
        error: ''
      }
    }
  ),
  on(getPokemonFailure, (state, {error}) => ({...state, error: error, loading: false})),
  on(getPokemonDetail, state => ({...state, loading: true})),
  on(getPokemonDetailSuccess ,(state, {pokemon}) => ({...state, detailPokemon: pokemon, loading: false, error: ''})),
  on (getPokemonDetailFailure, (state, {error}) => ({...state, error: error, loading: false})
))
