import { Component, Input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { BlogComponent } from '../../../../../shared/components/comman/blog/blog.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-flight-modern-blog',
    templateUrl: './flight-modern-blog.component.html',
    styleUrls: ['./flight-modern-blog.component.scss'],
    standalone: true,
    imports: [TitleComponent, BlogComponent]
})
export class FlightModernBlogComponent {

  @Input() blogs: number[];

  public description = "Stay updated with our latest news and blog—your source for insights, stories, and updates!"

;

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
