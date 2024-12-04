import { ViewportScroller, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { breakfast } from '../../../../../shared/interface/restaurant-classic';

@Component({
    selector: 'app-restaurant-classic-breakfast',
    templateUrl: './restaurant-classic-breakfast.component.html',
    styleUrls: ['./restaurant-classic-breakfast.component.scss'],
    standalone: true,
    imports: [NgStyle, NgbRating]
})
export class RestaurantClassicBreakfastComponent {

  @Input() breakfast: breakfast[];

  public breakfastData: breakfast[] = [];

  public isOpen: boolean = false;

  constructor(private config: NgbRatingConfig, private viewScroller: ViewportScroller) {
		this.config.max = 5;
		this.config.readonly = true;
	}

  ngOnInit(){
    this.breakfastData = this.breakfast;
  }

  openFilter(){
    this.isOpen =! this.isOpen;
  }

  filterItems(value: string){
    this.breakfastData = [];
    this.breakfast.filter((data) => {
      if(value === data.type){
        this.breakfastData.push(data)
      }else if(value == ''){
        this.breakfastData.push(data)
      }
    })
  }

  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
