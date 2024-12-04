import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cab, pagination } from '../../../../shared/interface/cab';
import { flight } from '../../../../shared/interface/flight';
import { restaurantDetail } from '../../../../shared/interface/restaurant-minimal';
import { hotels } from '../../../../shared/interface/hotel';
import { tours } from '../../../../shared/interface/tour';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class PaginationComponent {

  @Input() products: hotels[] = [];
  @Input() productsTour: tours[] = [];
  @Input() productsFlight: flight[] = [];
  @Input() cabDetails: cab[] = [];
  @Input() restaurantDetails: restaurantDetail[] = [];
  @Input() paginate: pagination;
  @Input() total: number;
  @Input() currentPage: number;
  @Input() pageSize: number;

  @Output() setPage: EventEmitter<number> = new EventEmitter();

  constructor() {}

  pageSet(page: number) {
    this.setPage.emit(page); // Set Page Number
  }
}
