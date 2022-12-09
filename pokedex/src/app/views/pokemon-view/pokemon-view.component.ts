import { Component, OnInit } from '@angular/core';
import { LoadPokemonsService } from 'src/app/utils/services/load-pokemons.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {

  constructor(private loadPokemonService: LoadPokemonsService) { }

  ngOnInit(): void {
    console.log(this.loadPokemonService.getPokemon());
    
    
  }

}
