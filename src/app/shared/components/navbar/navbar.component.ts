import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navigateTo(page: string): void {
    switch (page) {
      case 'home':
        window.location.href = 'home';
        break;
      case 'about':
        window.location.href = 'about';
        break;
      // case 'contact':
      //   window.location.href = 'contact';
      //   break;
      default:
        window.location.href = 'home';
        break;
    }
  }
}
