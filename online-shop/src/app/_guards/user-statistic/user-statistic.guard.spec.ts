import { TestBed, async, inject } from '@angular/core/testing';

import { UserStatisticGuard } from './user-statistic.guard';

describe('UserStatisticGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStatisticGuard]
    });
  });

  it('should ...', inject([UserStatisticGuard], (guard: UserStatisticGuard) => {
    expect(guard).toBeTruthy();
  }));
});
