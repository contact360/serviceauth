/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CounciltaxService } from './counciltax.service';

describe('Service: Counciltax', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounciltaxService]
    });
  });

  it('should ...', inject([CounciltaxService], (service: CounciltaxService) => {
    expect(service).toBeTruthy();
  }));
});
