import { TestBed, inject } from '@angular/core/testing';

import { ItemSizeService } from './item-size.service';

describe('ItemSizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemSizeService]
    });
  });

  it('should ...', inject([ItemSizeService], (service: ItemSizeService) => {
    expect(service).toBeTruthy();
  }));
});
