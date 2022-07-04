import { TestBed } from '@angular/core/testing';

import { StylingServicesService } from './styling-services.service';

describe('StylingServicesService', () => {
  let service: StylingServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StylingServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
