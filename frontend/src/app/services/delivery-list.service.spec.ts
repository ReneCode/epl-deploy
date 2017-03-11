/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeliveryListService } from './delivery-list.service';

describe('DeliveryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryListService]
    });
  });

  it('should ...', inject([DeliveryListService], (service: DeliveryListService) => {
    expect(service).toBeTruthy();
  }));
});
