import { TestBed, inject } from '@angular/core/testing';

import { GrafickeService } from './graficke.service';

describe('GrafickeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrafickeService]
    });
  });

  it('should be created', inject([GrafickeService], (service: GrafickeService) => {
    expect(service).toBeTruthy();
  }));
});
