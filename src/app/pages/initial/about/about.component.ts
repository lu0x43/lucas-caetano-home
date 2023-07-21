import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  imagesProfile: string[] = ['profile-1'];
  paragraphArray: string[] = [
    'ABOUT.PARAGRAPH_1',
    'ABOUT.PARAGRAPH_2',
    'ABOUT.PARAGRAPH_3',
    'ABOUT.PARAGRAPH_4',
  ];

  constructor() {}
  ngOnInit(): void {}
}
