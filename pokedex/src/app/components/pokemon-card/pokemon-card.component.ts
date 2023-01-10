import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PokemonSpieces } from 'src/app/utils/types/pokemon-spiecies.type';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  public pokemonTypes: Array<any> = [];

  @Input() public pokemonData: PokemonSpieces;

  @Input() public pokemonIndex = 1;

  @Output() public loadedType: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.pokemonData.url).subscribe((data: any) => {
      this.pokemonTypes = data.types;
      }
    );
  }

}
