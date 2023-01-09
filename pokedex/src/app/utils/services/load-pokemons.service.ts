import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoadPokemonsService {

  constructor(private http: HttpClient) {}

   public getPokemon(): Observable<any> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(true);
      }, 5000);
    });
   }

   public getPokemons(): Observable<any>{
     return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
   }
}
