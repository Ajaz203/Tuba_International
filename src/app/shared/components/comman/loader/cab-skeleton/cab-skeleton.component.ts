import { Component, Input } from '@angular/core';
import { CabListDetailsSkeletonComponent } from './cab-list-details-skeleton/cab-list-details-skeleton.component';
import { CabDetailsSkeletonComponent } from './cab-details-skeleton/cab-details-skeleton.component';
import { CabFilterSkeletonComponent } from './cab-filter-skeleton/cab-filter-skeleton.component';
import { CabGridSkeletonComponent } from './cab-grid-skeleton/cab-grid-skeleton.component';
import { CabSearchSkeletonComponent } from './cab-search-skeleton/cab-search-skeleton.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-skeleton',
    templateUrl: './cab-skeleton.component.html',
    styleUrl: './cab-skeleton.component.scss',
    standalone: true,
    imports: [NgClass, CabSearchSkeletonComponent, CabGridSkeletonComponent, CabFilterSkeletonComponent, CabDetailsSkeletonComponent, CabListDetailsSkeletonComponent]
})
export class CabSkeletonComponent {

  @Input() filterType: string;
  @Input() skeletonType: string;
  @Input() gridType: string;
  @Input() grid: boolean = true;
  @Input() filter: boolean;
  @Input() mapSide: string;
  @Input() map: boolean = false;
}
