import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadPokemonsService } from 'src/app/utils/services/load-pokemons.service';
import { IViewComponent } from '../../utils/interfaces/IViewComponent.interface'

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit, IViewComponent {

  public isLoaded: boolean = false;

  public loadingObserable: Observable<any>;

  constructor(private loadPokemonService: LoadPokemonsService) { }

  ngOnInit(): void {
    this.loadingObserable = this.loadPokemonService.getPokemon();

    this.loadingObserable.subscribe(next => {
      this.isLoaded = next;
    });
  }


}
