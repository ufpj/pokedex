import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { Pokemon } from '../../models/pokemon.model';
import { loadPokemonsSuccess } from '../actions/pokemon.action';
import { PokemonState } from '../models/pokemon-state.model';

export const pokemonAdapter = createEntityAdapter<Pokemon>();

const initialState: PokemonState = pokemonAdapter.getInitialState({
    entities: {},
    ids: [],
    loading: false,
    error: null,
    nextId: 1,
});

export const pokemonReducer = createReducer(
    initialState,
    on(loadPokemonsSuccess, (state, action) => {
        const pokemonsWithIds = action.data.results.map((pokemon: Pokemon, index: number) => ({
            ...pokemon,
            id: state.nextId + index,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${state.nextId + index}.png`
        }));
        return pokemonAdapter.setAll(pokemonsWithIds, { ...state, loading: false, error: null, nextId: state.nextId + action.data.results.length });
    })
);

export const getPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemons = createSelector(
    getPokemonState,
    pokemonAdapter.getSelectors().selectAll
);

export const selectLoading = createSelector(
    getPokemonState,
    (state: PokemonState) => state.loading
);

export const selectError = createSelector(
    getPokemonState,
    (state: PokemonState) => state.error || ''
);
