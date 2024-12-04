import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-title-three',
    templateUrl: './title-three.component.html',
    styleUrls: ['./title-three.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class TitleThreeComponent {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() description: string;
  @Input() titleClass: string;

}
