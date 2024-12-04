import { Component, Input } from '@angular/core';
import { BlogDetailPageSkeletonComponent } from './blog-detail-page-skeleton/blog-detail-page-skeleton.component';
import { BlogSkeletonComponent } from './blog-skeleton/blog-skeleton.component';
import { FlightLoaderComponent } from './flight-loader/flight-loader.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { LoaderTwoComponent } from './loader-two/loader-two.component';
import { LoaderOneComponent } from './loader-one/loader-one.component';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    standalone: true,
    imports: [LoaderOneComponent, LoaderTwoComponent, SkeletonLoaderComponent, FlightLoaderComponent, BlogSkeletonComponent, BlogDetailPageSkeletonComponent]
})
export class LoaderComponent {

  @Input() loaderType: string;
  @Input() gridType: string;
  @Input() filter: boolean;
  @Input() skeletonType: string;
  @Input() filterType: string;
  @Input() mapFilter: boolean;
  @Input() mapSide: string;
  @Input() list: boolean;
  @Input() grid: boolean;
  @Input() withOutTopPage: boolean;
  @Input() breadcrumbSection: boolean;
  @Input() hotel: boolean = false;
  @Input() tour: boolean = false;
  @Input() tourClassicGallery: boolean;
  @Input() flight: boolean;
  @Input() map: boolean;
  @Input() horizontalFilter: boolean;
  @Input() restaurantBreadcrumb: boolean;
  @Input() creativeList: boolean;
  @Input() mix: boolean;
}
