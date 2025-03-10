import { Component } from '@angular/core';
import { testimonial } from '../../../../shared/interface/hotel-classic';
import { blogs } from '../../../../shared/interface/hotel-minimal';
import { otherPages } from '../../../../shared/interface/pages';
import { HotelService } from '../../../../shared/services/hotel.service';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BlogComponent } from '../../../../shared/components/comman/blog/blog.component';
import { TeamComponent } from '../about-us-1/team/team.component';
import { TestimonialComponent } from '../../../../shared/components/comman/testimonial/testimonial.component';
import { AboutServiceComponent } from './about-service/about-service.component';
import { IntroductionComponent } from '../about-us-1/introduction/introduction.component';
import { TitleComponent } from '../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';


@Component({
    selector: 'app-about-us-2',
    templateUrl: './about-us-2.component.html',
    styleUrl: './about-us-2.component.scss',
    standalone: true,
    imports: [HeaderComponent, AnimationComponent, TitleComponent, IntroductionComponent, AboutServiceComponent, TestimonialComponent, TeamComponent, BlogComponent, FooterComponent, LayoutComponent]
})
export class AboutUs2Component {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'about us';
  public parent = 'Home';
  public child = 'about us';

  public aboutDetail: otherPages;
  public testimonial: testimonial[];
  public aboutTestimonial: number[];
  public aboutBlog: number[];
  public blog: blogs[];
public hotelTestimonial: testimonial[];
  public tourTestimonial: testimonial[];

  public hotelTestimonialId = [1,2,3];
  
  constructor(private pageService: PagesService, private hotelService: HotelService) {
    this.pageService.pages().subscribe(response => {
      this.aboutDetail = response.otherPages;

       this.aboutDetail.about.forEach((items) => {
        this.aboutTestimonial = items.testimonial;
        this.aboutBlog = items.blog;
      })
      this.hotelService.testimonial().subscribe(response => {
        this.testimonial = response.testimonial;
  
        if(Array.isArray(this.hotelTestimonialId)) {
          this.hotelTestimonial = this.testimonial?.filter((item) => {
            return this.hotelTestimonialId.includes(item.id)
          })
        }
  
        
      })
    })

    this.hotelService.testimonial().subscribe(response => {
      this.testimonial = response.testimonial;

      if (Array.isArray(this.aboutTestimonial)) {
       this.testimonial = this.testimonial?.filter((item) => {
         return this.aboutTestimonial.includes(item.id)
       })
     }
    })

  

    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      if (Array.isArray(this.aboutBlog)) {
       this.blog = this.blog?.filter((item) => {
         return this.aboutBlog.includes(item.id)
       })
     }
    });
  }
}
