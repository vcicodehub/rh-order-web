import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-management',
  template: `
    <order-side-nav></order-side-nav>
  `,
  styles: [
  ]
})
export class OrderManagementAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
