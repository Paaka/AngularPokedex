import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';
import { PokemonViewComponent } from './views/pokemon-view/pokemon-view.component';


const routes: Routes = [  
{
  path: '',
  component:MainViewComponent,
},
{
  path:'pokemon',
  component:PokemonViewComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
