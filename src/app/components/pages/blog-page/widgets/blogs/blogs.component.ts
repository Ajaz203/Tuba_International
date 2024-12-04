import { Component, Input } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryModule } from 'ngx-masonry';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { BlogPaginationComponent } from '../blog-pagination/blog-pagination.component';
import { NgClass, SlicePipe } from '@angular/common';

@Component({
    selector: 'app-blogs',
    templateUrl: './blogs.component.html',
    styleUrl: './blogs.component.scss',
    standalone: true,
    imports: [NgClass, NgxMasonryModule, BlogPaginationComponent, SlicePipe]
})
export class BlogsComponent {

  @Input() blogDetails: number[];
  @Input() gridType: string;
  @Input() masonry: boolean = false;
  @Input() mix: boolean = false;

  public blog: blogs[];

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
    resize: true,
  };

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
