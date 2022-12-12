import { Component, Input, OnInit } from '@angular/core';
import { PokemonSpieces } from 'src/app/utils/types/pokemon-spiecies.type';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() public pokemonData : PokemonSpieces;

  constructor() { }

  ngOnInit(): void {

  }

}
