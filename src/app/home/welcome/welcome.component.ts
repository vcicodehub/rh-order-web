import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `<h1>Welcome!</h1>`,
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
