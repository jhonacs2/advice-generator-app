import { TestBed } from '@angular/core/testing';

import { AdviceSlipService } from './advice-slip.service';

describe('AdviceslipService', () => {
  let service: AdviceSlipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdviceSlipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
