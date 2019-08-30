import { TestBed } from '@angular/core/testing';

import { PaginationMarketService } from './pagination-market.service';

describe('PaginationMarketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginationMarketService = TestBed.get(PaginationMarketService);
    expect(service).toBeTruthy();
  });
});
