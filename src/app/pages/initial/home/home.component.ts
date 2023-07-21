import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  paragraphArray: string[] = [
    'HOME.PARAGRAPH_1',
    'HOME.PARAGRAPH_2',
    'HOME.PARAGRAPH_3',
  ];
  constructor() {}
  ngOnInit(): void {}
}
