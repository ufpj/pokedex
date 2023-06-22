import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Output() toggleFavorite: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  @Output() addComment: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  @Output() deleteComment: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
}
