import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Timeline } from 'src/app/core/model/timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() title!: string;
  @Input() data!: Timeline[];

  centerLinePosition: string = '50%';
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    console.log(this.data);
    this.translateArray();
  }

  translateArray(): void {
    this.data.map((item) => {
      if (item.subTitle) {
        this.translateService
          .get(item.subTitle)
          .subscribe((translatedRole: string) => {
            item.subTitle = translatedRole;
          });
      }
    });

    this.data.map((item) => {
      if (item.text) {
        this.translateService
          .get(item.text)
          .subscribe((translatedRole: string) => {
            item.text = translatedRole;
          });
      }
    });

    this.data.map((item) => {
      if (item.date) {
        this.translateService
          .get(item.date)
          .subscribe((translatedRole: string) => {
            item.date = translatedRole;
          });
      }
    });
  }
}
