import { EntityState } from '@ngrx/entity';
import { Pokemon } from '../../models/pokemon.model';

export interface AppState {
    pokemon: EntityState<Pokemon>;
}