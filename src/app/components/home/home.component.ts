import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isClicked: boolean;
  breakLine1: boolean;
  breakLine2: boolean;
  width: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.responsive();
  }

  constructor() {
    this.isClicked = false;
  }

  ngOnInit(): void {}

  explore() {
    /* this.isClicked = true; */
    document.getElementById("Cards_Container").scrollIntoView();
  }

  responsive() {
    this.width = window.innerWidth;
    this.breakLine1 =  this.width < 760;
    this.breakLine2 =  this.width < 523;
  }
}
