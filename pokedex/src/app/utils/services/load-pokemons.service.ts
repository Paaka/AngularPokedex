import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewsModule } from 'src/app/views/views.module';

@Injectable({
  providedIn: 'root',
})
export class LoadPokemonsService {

  public pokemonObservable : Observable<any> = new Observable();


  constructor() {
    
   }

   public getPokemon(): Observable<any> {
    return new Observable((subscriber) =>{
      setTimeout(()=>{
        subscriber.next(true);
      },5000)
    });
   }
}
