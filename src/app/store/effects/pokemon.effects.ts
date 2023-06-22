import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../services/api.service';

import {
  loadPokemons,
  loadPokemonsSuccess,
  loadPokemonsFailure,
} from '../actions/pokemon.action';

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemons.start),
      mergeMap(() =>
        this.apiService.get<any>('pokemon').pipe(
          map((response) => loadPokemonsSuccess({ data: response })),
          catchError((error) => of(loadPokemonsFailure({ error })))
        )
      )
    )
  );
}
