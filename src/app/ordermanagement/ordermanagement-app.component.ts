import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-order-management',
  templateUrl: 'ordermanagement-app.component.html',
  styleUrls: ['./ordermanagement-app.component.css']
})
export class OrderManagementAppComponent implements OnInit {

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void {
    this.appConfig.loadAppConfig();
  }

}
