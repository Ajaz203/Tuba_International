import { Component, Input } from '@angular/core';
import { TitleFourComponent } from './title-four/title-four.component';
import { TitleThreeComponent } from './title-three/title-three.component';
import { TitleTwoComponent } from './title-two/title-two.component';
import { TitleOneComponent } from './title-one/title-one.component';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    standalone: true,
    imports: [TitleOneComponent, TitleTwoComponent, TitleThreeComponent, TitleFourComponent]
})
export class TitleComponent {

  @Input() type: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() background_text: string;
  @Input() description: string;
  @Input() textWhite: boolean = false;
  @Input() titleClass: string;
  @Input() rounded: boolean = false;

}
