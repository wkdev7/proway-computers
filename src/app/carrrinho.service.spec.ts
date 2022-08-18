import { TestBed } from '@angular/core/testing';

import { CarrrinhoService } from './carrrinho.service';

describe('CarrrinhoService', () => {
  let service: CarrrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
