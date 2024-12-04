import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-grid-skeleton',
    templateUrl: './grid-skeleton.component.html',
    styleUrls: ['./grid-skeleton.component.scss'],
    standalone: true
})
export class GridSkeletonComponent {

  @Input() mapFilter: boolean;
  @Input() gridType: string;
  @Input() horizontalFilter: boolean;

}
