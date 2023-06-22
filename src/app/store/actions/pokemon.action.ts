import { createAsyncAction } from '../utils/actions';

export const loadPokemons = createAsyncAction<any>('Load Pokemons');

export const {
    success: loadPokemonsSuccess,
    failure: loadPokemonsFailure,
} = loadPokemons;
