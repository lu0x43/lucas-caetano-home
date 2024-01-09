import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Timeline } from 'src/app/core/model/timeline';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit, OnDestroy {
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
  translatedData: Timeline[] = [];
  private langChangeSubscription: any;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateArray();
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  translateArray(): void {
    this.translatedData = [];

    this.extrasArray.map((item) => {
      const translatedItem: Timeline = {
        subTitle: '',
        date: '',
        text: '',
        link: item.link,
        icon: item.icon,
      };

      if (item.subTitle) {
        this.translateService
          .get(item.subTitle)
          .subscribe((translatedStr: string) => {
            translatedItem.subTitle = translatedStr;
          });
      }

      if (item.text) {
        this.translateService
          .get(item.text)
          .subscribe((translatedStr: string) => {
            translatedItem.text = translatedStr;
          });
      }

      if (item.date) {
        this.translateService
          .get(item.date)
          .subscribe((translatedStr: string) => {
            translatedItem.date = translatedStr;
          });
      }

      this.translatedData.push(translatedItem);
    });
  }
}
