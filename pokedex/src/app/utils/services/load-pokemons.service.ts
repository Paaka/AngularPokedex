import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewsModule } from 'src/app/views/views.module';

@Injectable({
  providedIn: 'root',
})
export class LoadPokemonsService {

  public pokemonObservable : Observable<any> = new Observable();


  constructor(private http: HttpClient) {
    
   }

   public getPokemon(): Observable<any> {
    return new Observable((subscriber) =>{
      setTimeout(()=>{
        subscriber.next(true);
      },5000)
    });
   }

   public getPokemons(): Observable<any>{
     return this.http.get('https://pokeapi.co/api/v2/generation/1')
   }
}
