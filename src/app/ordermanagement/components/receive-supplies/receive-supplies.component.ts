import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../../models/vendor';
import { VendorStoreService } from '../../services/vendor-store.service';

@Component({
  selector: 'app-receive-supplies',
  templateUrl: './receive-supplies.component.html',
  styleUrls: ['./receive-supplies.component.css']
})
export class ReceiveSuppliesComponent implements OnInit {

  list: Observable<Vendor[]>;
  
  constructor(private vendorStoreService: VendorStoreService) {
  }

  ngOnInit(): void {
    this.list = this.vendorStoreService.vendors$;
  }

  pushVendor() {
    this.vendorStoreService.addVendor({ 
      id: '99999', 
      number: '112233-777', 
      name: 'NEW VENDOR',
      address: {
        line1: "777 Excitement Dr",
        city: "Groovy",
        state: "CA",
        zip: 10077
      }
    });
  }

  removeVendor(vendor: Vendor) {
    this.vendorStoreService.removeVendor(vendor);
  }
}
