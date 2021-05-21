import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Order } from '../models/order';
import { AppConfigService } from './app-config.service';

@Injectable({ providedIn: 'root' })
export class OrderStoreService {

  private _nextID: number = 100;

  // Make _ordersSource private so it's not accessible from the outside, 
  // expose it as orders$ observable (read-only) instead.
  // Write to _ordersSource only through specified store methods below.
  private readonly _ordersSource = new BehaviorSubject<Order[]>([]);

  // Exposed observable (read-only).
  readonly orders$ = this._ordersSource.asObservable();

  constructor(private http: HttpClient, private config: AppConfigService) {
    config.loadAppConfig();
    this.http.post<Order[]>('https://nbac0j9n23.execute-api.us-east-2.amazonaws.com/dev/signet/api/v1/vendors/search', {})
      .subscribe(orders => this._ordersSource.next(orders));
  }

  // Get last value without subscribing to the orders$ observable (synchronously).
  getOrders(): Order[] {
    return this._ordersSource.getValue();
  }

  private _setOrders(orders: Order[]): void {
    this._ordersSource.next(orders);
  }

  addOrder(order: Order): void {
    order.id = String(this._nextID++);
    const orders = [...this.getOrders(), order];
    this._setOrders(orders);
  }

  removeOrder(order: Order): void {
    console.log('Removing order ', order);
    const orders = this.getOrders().filter(p => p.id !== order.id);
    this._setOrders(orders);
  }

}