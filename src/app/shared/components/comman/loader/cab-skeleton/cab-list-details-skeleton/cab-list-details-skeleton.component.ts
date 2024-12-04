import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-list-details-skeleton',
    templateUrl: './cab-list-details-skeleton.component.html',
    styleUrl: './cab-list-details-skeleton.component.scss',
    standalone: true,
    imports: [NgClass]
})
export class CabListDetailsSkeletonComponent {

  @Input() map: boolean;

}
