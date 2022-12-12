import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { AngularMaterialModule } from '../utils/modules/angular-material.module';



@NgModule({
  declarations: [
    LoadingComponent, 
    PokemonListComponent,
    PokemonCardComponent,
    ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports:[
    LoadingComponent, 
    PokemonCardComponent,
  ]
})
export class ComponentsModule { }
