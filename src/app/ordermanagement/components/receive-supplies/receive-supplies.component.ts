import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { OrderStoreService } from '../../services/order-store.service';

@Component({
  selector: 'app-receive-supplies',
  templateUrl: './receive-supplies.component.html',
  styleUrls: ['./receive-supplies.component.css']
})
export class ReceiveSuppliesComponent implements OnInit {

  list: Observable<Order[]>;
  
  constructor(private orderStoreService: OrderStoreService) {
  }

  ngOnInit(): void {
    this.list = this.orderStoreService.orders$;
  }

  pushOrder() {
    this.orderStoreService.addOrder({ id: '12345', number: 'R234985'});
  }

  removeOrder(order: Order) {
    this.orderStoreService.removeOrder(order);
  }
}
