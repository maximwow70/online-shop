import { TestBed, inject } from '@angular/core/testing';

import { ItemColorService } from './item-color.service';

describe('ItemColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemColorService]
    });
  });

  it('should ...', inject([ItemColorService], (service: ItemColorService) => {
    expect(service).toBeTruthy();
  }));
});
