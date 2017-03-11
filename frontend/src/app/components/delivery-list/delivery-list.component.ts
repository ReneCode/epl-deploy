import { Component, OnInit } from '@angular/core';
import { DeliveryListService } from '../../services/delivery-list.service';
import { Delivery } from '../../models/delivery';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  constructor(private deliveryService: DeliveryListService) { }

  ngOnInit() {
  }

  public get deliveries() : Delivery[] {
    return this.deliveryService.getDeliveries();
  }

}
