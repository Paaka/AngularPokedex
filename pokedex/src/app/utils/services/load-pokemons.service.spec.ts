import { TestBed } from '@angular/core/testing';

import { LoadPokemonsService } from './load-pokemons.service';

describe('LoadPokemonsService', () => {
  let service: LoadPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
