import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-details-skeleton',
    templateUrl: './cab-details-skeleton.component.html',
    styleUrl: './cab-details-skeleton.component.scss',
    standalone: true,
    imports: [NgClass]
})
export class CabDetailsSkeletonComponent {

  @Input() gridType: string;
}
