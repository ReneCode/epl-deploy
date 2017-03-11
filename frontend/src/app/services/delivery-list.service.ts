import { Injectable } from '@angular/core';
import { Delivery } from '../models/Delivery';

@Injectable()
export class DeliveryListService {

  private deliveries : Delivery[] = [
    { stages: ['a1', 'a2', 'a3'],
      name: 'service-A'
    },
    { stages: ['b1', 'b2', 'b3'],
      name: 'service-B'
    }
  ]

  constructor() { }

  getDeliveries() : Delivery[] {
    return this.deliveries;
  }

}
