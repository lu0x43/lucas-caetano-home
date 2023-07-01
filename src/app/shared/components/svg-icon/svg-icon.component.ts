import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input()
  set src(src: string) {
    this.svgIconUrl = src ? `url('${src}')` : 'initial';
  };
  @HostBinding('style.--svg-icon-url') private svgIconUrl?: string;

  @Input()
  set color(color: string) {
    this.svgIconColor = color ? color : '';
  };
  @HostBinding('style.--svg-icon-color') private svgIconColor?: string;



  @Input() @HostBinding('style.--svg-icon-size') size?: string;
  @Input() @HostBinding('style.--svg-icon-position') position?: string;
  @Input() @HostBinding('style.--svg-icon-repeat') repeat?: string;
  @Input() @HostBinding('style.--svg-icon-width') width?: string;
  @Input() @HostBinding('style.--svg-icon-height') height?: string;
}
