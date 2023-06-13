import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarText: string[] = [
    'NAVBAR.HOME',
    'NAVBAR.CAREER',
    'NAVBAR.SKILLS',
    'NAVBAR.ABOUTME',
    'NAVBAR.PROJECTS',
  ];
  activePage: string = 'NAVBAR.HOME';

  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {}

  scrollComponent(page: string): void {
    switch (page) {
      case 'NAVBAR.HOME':
        this.viewPortScroller.scrollToAnchor('home');
        // this.activePage = 'NAVBAR.HOME';
        break;
      case 'NAVBAR.CAREER':
        this.viewPortScroller.scrollToAnchor('career');
        // this.activePage = 'NAVBAR.CAREER';
        break;
      case 'NAVBAR.SKILLS':
        this.viewPortScroller.scrollToAnchor('skills');
        // this.activePage = 'NAVBAR.SKILLS';
        break;
      case 'NAVBAR.ABOUTME':
        this.viewPortScroller.scrollToAnchor('about');
        // this.activePage = 'NAVBAR.ABOUTME';
        break;
      case 'NAVBAR.PROJECTS':
        this.viewPortScroller.scrollToAnchor('projects');
        // this.activePage = 'NAVBAR.PROJECTS';
        break;
      default:
        this.viewPortScroller.scrollToAnchor('home');
        // this.activePage = 'NAVBAR.HOME';
        break;
    }
  }
}
