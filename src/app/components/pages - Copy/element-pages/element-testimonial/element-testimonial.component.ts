import { Component } from '@angular/core';
import { testimonial } from '../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TestimonialComponent } from '../../../../shared/components/comman/testimonial/testimonial.component';
import { TitleComponent } from '../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-testimonial',
    templateUrl: './element-testimonial.component.html',
    styleUrl: './element-testimonial.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, AnimationComponent, TitleComponent, TestimonialComponent, FooterComponent, LayoutComponent]
})
export class ElementTestimonialComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'testimonial';
  public parent = 'elements';
  public child = 'testimonial';
  public description = "our tourist is satisfied and give best feedback";

  public testimonial: testimonial[];
  public hotelTestimonial: testimonial[];
  public tourTestimonial: testimonial[];

  public hotelTestimonialId = [1,2,3];
  public tourTestimonialId = [1,2]

  constructor(private hotelService: HotelService){
    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;

      if(Array.isArray(this.hotelTestimonialId)) {
        this.hotelTestimonial = this.testimonial?.filter((item) => {
          return this.hotelTestimonialId.includes(item.id)
        })
      }

      if(Array.isArray(this.tourTestimonialId)) {
        this.tourTestimonial = this.testimonial?.filter((item) => {
          return this.tourTestimonialId.includes(item.id)
        })
      }
    })
  }
}
