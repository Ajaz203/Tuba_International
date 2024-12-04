import { Component } from '@angular/core';
import { topPlacesData } from '../../../data/data/footer';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-top-places',
    templateUrl: './top-places.component.html',
    styleUrls: ['./top-places.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class TopPlacesComponent {

  public topPlacesData = topPlacesData;

}
