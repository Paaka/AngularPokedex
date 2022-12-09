import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { MainViewComponent } from './main-view/main-view.component';



@NgModule({
  declarations: [PokemonViewComponent, MainViewComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
