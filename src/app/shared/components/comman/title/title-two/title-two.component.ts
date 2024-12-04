import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title-two',
    templateUrl: './title-two.component.html',
    styleUrls: ['./title-two.component.scss'],
    standalone: true
})
export class TitleTwoComponent {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() textWhite: boolean;

}
