import { TestBed } from '@angular/core/testing';

import { NotificationServicesService } from './notification-services.service';

describe('NotificationServicesService', () => {
  let service: NotificationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
