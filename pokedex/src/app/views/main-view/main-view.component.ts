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

  public loadingObserable: Observable<any>;

  constructor(private loadPokemonService: LoadPokemonsService) { }

  ngOnInit(): void {
    this.loadingObserable = this.loadPokemonService.getPokemon();

    this.loadingObserable.subscribe(next => {
      this.isLoaded = next;
    });
  }
}
