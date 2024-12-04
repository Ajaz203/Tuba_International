import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-tour-skeleton-details',
    templateUrl: './tour-skeleton-details.component.html',
    styleUrls: ['./tour-skeleton-details.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class TourSkeletonDetailsComponent {

  @Input() gridType: string;
}
