import { Component, Input } from '@angular/core';
import { BannerOneComponent } from './banner-one/banner-one.component';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    standalone: true,
    imports: [BannerOneComponent]
})
export class BannerComponent {

  @Input() type: string;

}
