import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';

@Component({
    selector: 'app-flight-minimal-home-section',
    templateUrl: './flight-minimal-home-section.component.html',
    styleUrls: ['./flight-minimal-home-section.component.scss'],
    standalone: true,
    imports: [SearchBoxComponent, RouterLink]
})
export class FlightMinimalHomeSectionComponent {

  public selectedValue: string = 'option1';

  changeValue(event: Event){
    this.selectedValue = (event.target as HTMLInputElement).value;
  }
}
