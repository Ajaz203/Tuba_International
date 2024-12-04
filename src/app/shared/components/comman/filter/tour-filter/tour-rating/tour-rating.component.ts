import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { tourRating } from '../../../../../../shared/components/data/data/filter/tour';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-tour-rating',
    templateUrl: './tour-rating.component.html',
    styleUrls: ['./tour-rating.component.scss'],
    standalone: true,
    imports: [NgStyle, NgbRating]
})
export class TourRatingComponent {

  public tourRating = tourRating;
  public isOpenRating: boolean = true;
  public selectedRating: string[] = [];

   openRating(){
    this.isOpenRating =! this.isOpenRating;
  }

  constructor(
    private config: NgbRatingConfig,
    private route: ActivatedRoute,
    private router: Router){
      // Rating
    this.config.max = 5;
    this.config.readonly = true;

    this.route.queryParams.subscribe((params) => {
        this.selectedRating = params['rating'] ? params['rating'].split(",") : []
      })
    }

  applyFilter(event: Event){
    const index = this.selectedRating.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedRating.push((event.target as HTMLInputElement).value)
    }else {
      this.selectedRating.splice(index,1)
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { rating: this.selectedRating.length ? this.selectedRating.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedRating?.includes(item)){
      return true;
    }
    return false;
  }
}
