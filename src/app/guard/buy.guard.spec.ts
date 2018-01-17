import { TestBed, async, inject } from '@angular/core/testing';

import { BuyGuard } from './buy.guard';

describe('BuyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyGuard]
    });
  });

  it('should ...', inject([BuyGuard], (guard: BuyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
