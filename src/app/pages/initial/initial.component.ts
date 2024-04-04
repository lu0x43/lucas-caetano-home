import { ViewportScroller } from '@angular/common';
import {ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import { ThemeService } from '../../shared/service/theme.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent implements OnInit, OnChanges {
  themeDarkRed = false;
  constructor(
    private viewPortScroller: ViewportScroller,
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
    this.themeDarkRed = this.themeService.isDarkRedTheme();
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const backToTopButton = document.querySelector('.btn-backtop');
      if (window.scrollY > 100) {
        backToTopButton?.classList.add('show');
      } else {
        backToTopButton?.classList.remove('show');
      }
    });
  }

  ngOnChanges(): void {
    this.themeDarkRed = this.themeService.isDarkRedTheme();
    this.cdr.detectChanges();
  }

  backToTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
