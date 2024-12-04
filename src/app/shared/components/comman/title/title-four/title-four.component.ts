import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title-four',
    templateUrl: './title-four.component.html',
    styleUrls: ['./title-four.component.scss'],
    standalone: true
})
export class TitleFourComponent {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() description: string;

}
