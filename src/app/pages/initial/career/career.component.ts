import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {

  careerArray = [
    {
      title: 'CAREER.FREELANCER',
      date: 'CAREER.DATE_FREELANCER',
      text: 'CAREER.FREELANCER_TXT',
      link: 'https://www.workana.com/freelancer/398e6215d3fc8401c92799bb129bc1e9',
      icon: 'icon-gray-blue'
    },
    {
      title: '',
      date: 'CAREER.DATE_PERFORMA',
      text: 'CAREER.PERFORMA_TXT',
      link: 'https://performait.com/',
      icon: 'performa'
    },
    {
      title: '',
      date: 'CAREER.DATE_ATLA',
      text: 'CAREER.ATLA_TXT',
      link: 'https://atlaensino.com/',
      icon: 'atla-ensino'
    },
  ];



  constructor() {}
  ngOnInit(): void {}
}
