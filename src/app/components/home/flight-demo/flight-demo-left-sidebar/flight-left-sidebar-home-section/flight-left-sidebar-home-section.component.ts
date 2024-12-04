import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-flight-left-sidebar-home-section',
    templateUrl: './flight-left-sidebar-home-section.component.html',
    styleUrls: ['./flight-left-sidebar-home-section.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class FlightLeftSidebarHomeSectionComponent {

  @Input() displayClass: string;

}
