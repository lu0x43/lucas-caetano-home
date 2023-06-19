import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  info = {
    email: 'contato@devlucascaetano.com',
    phone: '+55(44)99708-7793',
    whatsapp: '5544997087793',
    linkedin: 'https://www.linkedin.com/in/lucas-caetano-/',
    github: 'https://github.com/devLucasCaetano',
    instagram: 'https://www.instagram.com/dev.lucascaetano/',
  };

  constructor() {}
  ngOnInit(): void {}
}
