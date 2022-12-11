import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IViewComponent } from 'src/app/utils/interfaces/IViewComponent.interface';
import { LoadPokemonsService } from 'src/app/utils/services/load-pokemons.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, IViewComponent {

  public isLoaded: boolean = false;

  public allPokemons: any[] = [];

  constructor(private loadPokemonService: LoadPokemonsService) { }

  ngOnInit(): void {
    this.loadPokemonService.getPokemons().subscribe(({pokemon_species}) =>{
      this.allPokemons = pokemon_species;
      this.isLoaded = true;
    })
  }

}
