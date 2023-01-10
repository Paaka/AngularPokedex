import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IViewComponent } from 'src/app/utils/interfaces/IViewComponent.interface';
import { LoadPokemonsService } from 'src/app/utils/services/load-pokemons.service';
import { PokemonSpieces } from 'src/app/utils/types/pokemon-spiecies.type';
import {tick} from '@angular/core/testing';
import {delay, tap} from 'rxjs/operators';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, IViewComponent {

  public isLoaded = false;

  public allPokemons: PokemonSpieces[] = [];

  constructor(private loadPokemonService: LoadPokemonsService) { }

  ngOnInit(): void {
    this.loadPokemonService
      .getPokemons()
      .pipe(
        delay(1000),
        tap(({results}) => {
          console.log(this.isLoaded);
          this.allPokemons = results;
          this.isLoaded = true;
        })
      ).subscribe();
  }

}
