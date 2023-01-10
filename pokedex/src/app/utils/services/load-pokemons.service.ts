import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoadPokemonsService {
  public subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

   public getPokemon(): Observable<any> {
    return this.subject;
   }

   public getPokemons(): Observable<any>{
    this.subject.next(false);
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
       .pipe(tap(() => this.subject.next(true)));
   }
}
