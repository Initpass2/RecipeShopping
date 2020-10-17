import { TestBed } from '@angular/core/testing';

import { RecipeListResolverService } from './recipe-list-resolver.service';

describe('RecipeListResolverService', () => {
  let service: RecipeListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
