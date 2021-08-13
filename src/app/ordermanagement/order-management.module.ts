import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

import { OrderManagementAppComponent } from './ordermanagement-app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestSuppliesComponent } from './components/request-supplies/request-supplies.component';
import { ReceiveSuppliesComponent } from './components/receive-supplies/receive-supplies.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { OrderStoreService } from './services/order-store.service';
import { VendorStoreService } from './services/vendor-store.service';

const routes: Routes = [
  { path: '', component: OrderManagementAppComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'request-supplies', component: RequestSuppliesComponent },
      { path: 'receive-supplies', component: ReceiveSuppliesComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    OrderManagementAppComponent, 
    DashboardComponent, 
    RequestSuppliesComponent,
    ReceiveSuppliesComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    OrderStoreService,
    VendorStoreService
  ]
})
export class OrderManagementModule { }
