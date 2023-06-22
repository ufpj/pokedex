import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';
import { loadPokemons } from 'src/app/store/actions/pokemon.action';
import { AppState } from 'src/app/store/models/app.state';
import { selectPokemons, selectLoading, selectError } from '../../store/reducers/pokemon.reducer';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<Pokemon[]> | undefined;
  loading$: Observable<boolean> | undefined;
  error$: Observable<string> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.pokemons$ = this.store.select(selectPokemons);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.loadPokemons();
  }

  loadPokemons() {
    this.store.dispatch(loadPokemons.start());
  }
}
