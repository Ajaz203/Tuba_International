import { Component, Input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { SlicePipe } from '@angular/common';
import { BlogPaginationComponent } from '../blog-pagination/blog-pagination.component';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrl: './blog-list.component.scss',
    standalone: true,
    imports: [BlogPaginationComponent, SlicePipe]
})
export class BlogListComponent {

  @Input() blogDetails: number[];
  @Input() creativeList: boolean = false;
  @Input() mixList: boolean = false;

  public blog: blogs[];

  constructor(private hotelService: HotelService){
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.blogDetails)) {
        this.blog = this.blog?.filter((item) => {
          return this.blogDetails.includes(item.id)
        })
      }
    });
  }
}
