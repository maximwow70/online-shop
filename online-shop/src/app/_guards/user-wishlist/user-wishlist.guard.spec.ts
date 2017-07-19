import { TestBed, async, inject } from '@angular/core/testing';

import { UserWishlistGuard } from './user-wishlist.guard';

describe('UserWishlistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserWishlistGuard]
    });
  });

  it('should ...', inject([UserWishlistGuard], (guard: UserWishlistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
