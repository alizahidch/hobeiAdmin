import { TestBed } from '@angular/core/testing';

import { NumberAdminService } from './number-admin.service';

describe('NumberAdminService', () => {
  let service: NumberAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
