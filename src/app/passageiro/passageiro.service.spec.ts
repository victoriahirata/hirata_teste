import { TestBed } from '@angular/core/testing';

import { PassageiroService } from './passageiro.service';

describe('PassageiroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassageiroService = TestBed.get(PassageiroService);
    expect(service).toBeTruthy();
  });
});
