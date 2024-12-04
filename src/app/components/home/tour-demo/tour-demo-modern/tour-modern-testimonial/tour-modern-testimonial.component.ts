import { Component, Input } from '@angular/core';
import { testimonial } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { TestimonialComponent } from '../../../../../shared/components/comman/testimonial/testimonial.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-tour-modern-testimonial',
    templateUrl: './tour-modern-testimonial.component.html',
    styleUrls: ['./tour-modern-testimonial.component.scss'],
    standalone: true,
    imports: [TitleComponent, TestimonialComponent]
})
export class TourModernTestimonialComponent {

  @Input() id: number[];

  public description = "our tourist is satisfied and give best feedback";

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
