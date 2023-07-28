import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarPages: string[] = [
    'NAVBAR.HOME',
    'NAVBAR.SKILLS',
    'NAVBAR.CAREER',
    'NAVBAR.EDUCATION',
    'NAVBAR.ABOUTME',
    'NAVBAR.PROJECTS',
  ];
  nameScroll: string[] = [];

  openMenu: boolean = false;

  constructor(
    private viewPortScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {}

  changeStateMenu(): void {
    this.openMenu = !this.openMenu;
  }

  scrollComponent(page: string): void {
    this.nameScroll = page.split('.');
    this.nameScroll.shift();
    this.nameScroll = this.nameScroll.map((element) => {
      return element.toLowerCase();
    });

    this.nameScroll.forEach((element) => {
      this.viewPortScroller.scrollToAnchor(element);
    });

    this.openMenu = false;
  }
}
