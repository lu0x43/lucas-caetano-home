import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Timeline } from 'src/app/core/model/timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Input() data!: Timeline[];

  centerLinePosition: string = '50%';
  translatedData: Timeline[] = [];

  sortKey: string = 'subTitle';
  sortDirection: 'asc' | 'desc' = 'asc';

  private langChangeSubscription: any;
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateArray();

    this.langChangeSubscription = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.translateArray();
      },
    );
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  translateArray(): void {
    this.translatedData = [];

    this.data.map((item) => {
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

  sortData(event: { active: string; direction: 'asc' | 'desc' }): void {
    this.sortKey = event.active;
    this.sortDirection = event.direction;
  }
}
