import { Component } from '@angular/core';
import { footerAbout } from '../../../data/data/footer';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class AboutComponent {

  public footerAbout = footerAbout;

}
