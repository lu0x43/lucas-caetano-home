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
    // 'NAVBAR.PROJECTS',
  ];
  nameScroll: string[] = [];

  openMenu: boolean = false;

  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {}

  changeStateMenu(): void {
    this.openMenu = !this.openMenu;
  }

  scrollComponent(page: string): void {
    const sectionId = page.split('.')[1].toLowerCase();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });

    this.openMenu = false;
  }
}
