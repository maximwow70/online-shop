import { TestBed, inject } from '@angular/core/testing';

import { ItemCostService } from './item-cost.service';

describe('ItemCostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemCostService]
    });
  });

  it('should ...', inject([ItemCostService], (service: ItemCostService) => {
    expect(service).toBeTruthy();
  }));
});
