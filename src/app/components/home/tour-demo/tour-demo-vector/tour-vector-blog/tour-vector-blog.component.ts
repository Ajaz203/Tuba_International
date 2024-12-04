import { Component, Input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { BlogComponent } from '../../../../../shared/components/comman/blog/blog.component';

@Component({
    selector: 'app-tour-vector-blog',
    templateUrl: './tour-vector-blog.component.html',
    styleUrls: ['./tour-vector-blog.component.scss'],
    standalone: true,
    imports: [BlogComponent]
})
export class TourVectorBlogComponent {

  @Input() blogs: number[];

  public blog: blogs[];

  constructor(private hotelService: HotelService){
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.blogs)) {
        this.blog = this.blog?.filter((item) => {
          return this.blogs.includes(item.id)
        })
      }
    });
  }
}
