import { Component } from '@angular/core';
import { footerUsefulLink } from '../../../data/data/footer';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-useful-links',
    templateUrl: './useful-links.component.html',
    styleUrls: ['./useful-links.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class UsefulLinksComponent {

  public footerUsefulLink = footerUsefulLink;

}
