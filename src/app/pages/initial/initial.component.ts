import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent implements OnInit {
  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const backToTopButton = document.getElementById('btn-backtop');
      if (window.scrollY > 100) {
        backToTopButton?.classList.add('show');
      } else {
        backToTopButton?.classList.remove('show');
      }
    });
  }

  backToTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
