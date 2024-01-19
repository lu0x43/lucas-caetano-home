import { Component, OnInit } from '@angular/core';

import { Timeline } from 'src/app/core/model/timeline';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  title = 'CAREER.TITLE';

  careerArray: Timeline[] = [
    {
      date: 'CAREER.DTT_DATE',
      text: 'CAREER.DTT_TXT',
      link: 'https://www2.deloitte.com/br/pt.html',
      icon: 'deloitte',
    },
    // {
    //   subTitle: 'CAREER.FREELANCER',
    //   date: 'CAREER.DATE_FREELANCER',
    //   text: 'CAREER.FREELANCER_TXT',
    //   link: 'https://www.workana.com/freelancer/398e6215d3fc8401c92799bb129bc1e9',
    //   icon: 'lucas-logo-vermelho',
    // },
    {
      subTitle: '',
      date: 'CAREER.DATE_PERFORMA',
      text: 'CAREER.PERFORMA_TXT',
      link: 'https://performait.com/',
      icon: 'performa',
    },
    {
      subTitle: '',
      date: 'CAREER.DATE_ATLA',
      text: 'CAREER.ATLA_TXT',
      link: 'https://atlaensino.com/',
      icon: 'atla-ensino',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
