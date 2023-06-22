import { ActionReducerMap } from '@ngrx/store';
import { pokemonReducer } from './pokemon.reducer';
import { PokemonState } from '../models/pokemon-state.model';

export interface AppState {
  pokemon: PokemonState;
}

export const rootReducer: ActionReducerMap<AppState> = {
  pokemon: pokemonReducer,
};
