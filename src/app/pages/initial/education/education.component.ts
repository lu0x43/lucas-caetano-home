import { Component, OnInit } from '@angular/core';
import { Timeline } from 'src/app/core/model/timeline';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  expanded = false;

  titleFomal = 'EDUCATION.FORMAL_EDU';
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

  titleCourse = 'EDUCATION.COURSE';
  extrasArray: Timeline[] = [
    {
      subTitle: 'EDUCATION.UH',
      date: 'EDUCATION.DATE_UH',
      text: 'EDUCATION.UH_TXT',
      link: 'https://hackingnaweb.com/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
