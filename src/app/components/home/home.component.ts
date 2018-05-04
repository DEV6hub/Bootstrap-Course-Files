import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  currentTabIndex = 0;

  ngOnInit() {
  }

  tabChanged(event) {
    this.currentTabIndex = event.index;
  }

}
