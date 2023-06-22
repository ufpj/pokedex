import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from '../../components/shared/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [HomeComponent, PokemonListComponent, PokemonCardComponent],
  imports: [CommonModule],
})
export class HomeModule {}
