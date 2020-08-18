import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public title: string;
  public width: any;

  constructor(private router: Router) {
    this.title = 'Mecatronica from Scratch';
  }

  ngOnInit(): void {
    this.updateTitle();
  }

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    this.updateTitle();
  }

  private updateTitle() {
    this.width = window.innerWidth;
    const OPTION = this.getTitle( this.width );
    switch (OPTION) {
      case 0:
        this.title = "M. Scratch";
        break;
      case 1:
        this.title = "M. from Scratch";
        break;
      default:
        this.title = "Mecatronica from Scratch";
        break;
    }
  }

  private getTitle( width: number ): number {
    if ( width <= 308 ) {
      return 0;
    } else if ( width > 308 && width <= 474  ) {
      return 1;
    } else {
      return 2;
    }
  }

  navigateTo( id: string ) {
    if (window.location.href.includes("/home")) {
      document.getElementById( id ).scrollIntoView();
    } else {
      this.router.navigate(['home']);
    }
  }

}
