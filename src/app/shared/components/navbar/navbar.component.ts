import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarText: string[] = ['NAVBAR.HOME', 'NAVBAR.CAREER', 'NAVBAR.PROJECTS'];
  activePage: string = 'NAVBAR.HOME';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  callComponent(page: string): void {
    switch (page) {
      case 'NAVBAR.HOME':
        this.router.navigate(['/home']);
        this.activePage = 'NAVBAR.HOME';
        break;
      case 'NAVBAR.CAREER':
        this.router.navigate(['/career']);
        this.activePage = 'NAVBAR.CAREER';
        break;
      case 'NAVBAR.PROJECTS':
        this.router.navigate(['/projects']);
        this.activePage = 'NAVBAR.PROJECTS';
        break;
      default:
        this.router.navigate(['/home']);
        this.activePage = 'NAVBAR.HOME';
        break;
    }
  }
}
