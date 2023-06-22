import { EntityState } from "@ngrx/entity";
import { Pokemon } from "src/app/models/pokemon.model";

export interface PokemonState extends EntityState<Pokemon> {
    loading: boolean;
    error: string | null;
    nextId: number;
}
