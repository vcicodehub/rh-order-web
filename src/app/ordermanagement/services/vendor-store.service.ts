import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Vendor } from '../models/vendor';
import { AppConfigService } from './app-config.service';

@Injectable({ providedIn: 'root' })
export class VendorStoreService {

  private _nextID: number = 100;

  // Make _vendorsSource private so it's not accessible from the outside, 
  // expose it as vendors$ observable (read-only) instead.
  // Write to _ordersSource only through specified store methods below.
  private readonly _vendorsSource = new BehaviorSubject<Vendor[]>([]);

  // Exposed observable (read-only).
  readonly vendors$ = this._vendorsSource.asObservable();

  constructor(private http: HttpClient, private config: AppConfigService) {
    this.http.post<Vendor[]>(config.getHost() + '/signet/api/v1/om/vendors/search', {})
      .subscribe(vendors => {
        console.log('Loaded ' + vendors.length + ' vendors');
        this._vendorsSource.next(vendors);
      });
  }

  // Get last value without subscribing to the orders$ observable (synchronously).
  getVendors(): Vendor[] {
    return this._vendorsSource.getValue();
  }

  private _setVendors(vendors: Vendor[]): void {
    this._vendorsSource.next(vendors);
  }

  addVendor(vendor: Vendor): void {
    vendor.id = String(this._nextID++);
    const vendors = [...this.getVendors(), vendor];
    this._setVendors(vendors);
  }

  removeVendor(vendor: Vendor): void {
    console.log('Removing vendor ', vendor);
    const vendors = this.getVendors().filter(p => p.id !== vendor.id);
    this._setVendors(vendors);
  }

}