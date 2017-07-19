import { TestBed, async, inject } from '@angular/core/testing';

import { UserCartGuard } from './user-cart.guard';

describe('UserCartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCartGuard]
    });
  });

  it('should ...', inject([UserCartGuard], (guard: UserCartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
