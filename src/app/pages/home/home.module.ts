import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [HomeComponent, PokemonListComponent],
  imports: [CommonModule],
})
export class HomeModule {}
