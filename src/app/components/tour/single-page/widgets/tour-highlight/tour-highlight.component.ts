import { Component, Input } from '@angular/core';
import { tourHighlight } from '../../../../../shared/interface/tour';

@Component({
    selector: 'app-tour-highlight',
    templateUrl: './tour-highlight.component.html',
    styleUrl: './tour-highlight.component.scss',
    standalone: true
})
export class TourHighlightComponent {

  @Input() highlights: tourHighlight[];
  @Input() image: boolean = true;
  @Input() bottomDetails: boolean = true;
  
}
