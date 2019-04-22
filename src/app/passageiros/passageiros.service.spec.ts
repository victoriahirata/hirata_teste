import { TestBed } from '@angular/core/testing';

import { PassageirosService } from './passageiros.service';

describe('PassageirosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassageirosService = TestBed.get(PassageirosService);
    expect(service).toBeTruthy();
  });
});
