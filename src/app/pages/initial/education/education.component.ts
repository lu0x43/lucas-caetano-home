import { Component, OnInit } from '@angular/core';
import { Timeline } from 'src/app/core/model/timeline';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  title = 'EDUCATION.TITLE';
  educationArray: Timeline[] = [
    {
      subTitle: 'EDUCATION.UTFPR',
      date: 'EDUCATION.DATE_UTFPR',
      text: 'EDUCATION.UTFPR_TXT',
    },
    {
      subTitle: 'EDUCATION.ETEC',
      date: 'EDUCATION.DATE_ETEC',
      text: 'EDUCATION.ETEC_TXT',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
