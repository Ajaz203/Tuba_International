import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-title-one',
    templateUrl: './title-one.component.html',
    styleUrls: ['./title-one.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class TitleOneComponent {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() background_text: string;
  @Input() rounded: boolean;
  @Input() textWhite: boolean;

}
