import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-order-management',
  template: `
    <order-side-nav></order-side-nav>
  `,
  styles: [
  ]
})
export class OrderManagementAppComponent implements OnInit {

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void {
    this.appConfig.loadAppConfig();
  }

}
