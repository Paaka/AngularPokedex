import { Injectable } from '@angular/core';
import { ViewsModule } from 'src/app/views/views.module';

@Injectable({
  providedIn: 'root',
})
export class LoadPokemonsService {



  constructor() {
    
   }

   public getPokemon(): number {
    return 10;
   }
}
