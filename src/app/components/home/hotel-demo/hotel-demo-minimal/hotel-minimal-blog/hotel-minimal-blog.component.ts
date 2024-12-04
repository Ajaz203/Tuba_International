import { Component, Input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { BlogComponent } from '../../../../../shared/components/comman/blog/blog.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-hotel-minimal-blog',
    templateUrl: './hotel-minimal-blog.component.html',
    styleUrls: ['./hotel-minimal-blog.component.scss'],
    standalone: true,
    imports: [TitleComponent, BlogComponent]
})
export class HotelMinimalBlogComponent {

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
