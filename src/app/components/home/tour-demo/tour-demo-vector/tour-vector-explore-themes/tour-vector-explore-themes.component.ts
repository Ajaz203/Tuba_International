import { Component, Input } from '@angular/core';
import { exploreTheme } from '../../../../../shared/interface/tour-vector';
import { PopularDestinationComponent } from '../../../../../shared/components/comman/popular-destination/popular-destination.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-tour-vector-explore-themes',
    templateUrl: './tour-vector-explore-themes.component.html',
    styleUrls: ['./tour-vector-explore-themes.component.scss'],
    standalone: true,
    imports: [TitleComponent, PopularDestinationComponent]
})
export class TourVectorExploreThemesComponent {

  @Input() themes: exploreTheme[];
  
}
