import { Component, Input } from '@angular/core';
import { testimonial } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { TestimonialComponent } from '../../../../../shared/components/comman/testimonial/testimonial.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-cab-classic-testimonial',
    templateUrl: './cab-classic-testimonial.component.html',
    styleUrls: ['./cab-classic-testimonial.component.scss'],
    standalone: true,
    imports: [TitleComponent, TestimonialComponent]
})
export class CabClassicTestimonialComponent {

  @Input() id: number[];

  public testimonial: testimonial[];

  constructor(private hotelService: HotelService){
    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;

      if (Array.isArray(this.id)) {
       this.testimonial = this.testimonial?.filter((item) => {
         return this.id.includes(item.id)
       })
     }
    })
  }
}
