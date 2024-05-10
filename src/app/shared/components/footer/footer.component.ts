import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  info = {
    linkedin: 'https://www.linkedin.com/in/dev-lucascaetano/',
    github: 'https://github.com/devLucasCaetano',
    instagram: 'https://www.instagram.com/lucascaetano.dev/',
  };

  constructor() {}
  ngOnInit(): void {}
}
