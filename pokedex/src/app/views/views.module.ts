import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { LoadPokemonsService } from '../utils/services/load-pokemons.service';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [PokemonViewComponent, MainViewComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers:[
    LoadPokemonsService,
  ]
})
export class ViewsModule { }
