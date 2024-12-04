import { Component, Input } from '@angular/core';
import { tourItinerary } from '../../../../../shared/interface/tour';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tour-itinerary',
    templateUrl: './tour-itinerary.component.html',
    styleUrl: './tour-itinerary.component.scss',
    standalone: true,
    imports: [NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody]
})
export class TourItineraryComponent {

  @Input() itinerary: tourItinerary[];

}
