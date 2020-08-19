import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isClicked: boolean;

  constructor() {
    this.isClicked = false;
  }

  ngOnInit(): void {}

  explore() {
    this.isClicked = true;
  }
}
