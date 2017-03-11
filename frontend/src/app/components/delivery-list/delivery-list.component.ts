import { Component, OnInit } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';

import { DeliveryListService } from '../../services/delivery-list.service';
import { Delivery } from '../../models/delivery';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  
  text: string = 'empty';

  constructor(
    private deliveryService: DeliveryListService,
    private authHttp: AuthHttp) { }

  ngOnInit() {
    this.authHttp.get('//localhost:3000')
      .subscribe(
        data => {
          this.text = data.json()
        },
        err => {
          console.log(err);
        }
      );
  }

  public get deliveries() : Delivery[] {
    return this.deliveryService.getDeliveries();
  }


}
