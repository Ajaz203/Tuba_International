import { Component, Input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { BlogComponent } from '../../../../../shared/components/comman/blog/blog.component';

@Component({
    selector: 'app-flight-minimal-blog',
    templateUrl: './flight-minimal-blog.component.html',
    styleUrls: ['./flight-minimal-blog.component.scss'],
    standalone: true,
    imports: [BlogComponent]
})
export class FlightMinimalBlogComponent {

  @Input() id: number[];

  public blog: blogs[];

  constructor(private hotelService: HotelService){
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.id)) {
        this.blog = this.blog?.filter((item) => {
          return this.id.includes(item.id)
        })
      }
    });
  }
}
