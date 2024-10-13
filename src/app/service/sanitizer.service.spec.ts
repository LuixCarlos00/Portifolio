/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SanitizerService } from './sanitizer.service';

describe('Service: Sanitizer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanitizerService]
    });
  });

  it('should ...', inject([SanitizerService], (service: SanitizerService) => {
    expect(service).toBeTruthy();
  }));
});
