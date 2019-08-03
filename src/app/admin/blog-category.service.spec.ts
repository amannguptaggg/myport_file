import { TestBed } from '@angular/core/testing';

import { BlogCategoryService } from './blog-category.service';

describe('BlogCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogCategoryService = TestBed.get(BlogCategoryService);
    expect(service).toBeTruthy();
  });
});
