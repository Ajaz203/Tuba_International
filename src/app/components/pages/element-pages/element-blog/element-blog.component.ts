import { Component } from '@angular/core';
import { blogs } from '../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BlogComponent } from '../../../../shared/components/comman/blog/blog.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-blog',
    templateUrl: './element-blog.component.html',
    styleUrl: './element-blog.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, BlogComponent, FooterComponent, LayoutComponent]
})
export class ElementBlogComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'blog';
  public parent = 'elements';
  public child = 'blog';

  public hotelBlogId = [1,2,3,4]
  public cabBlogId = [8,9,10];
  public flightBlogId = [11,12,13,14];

  public blog: blogs[];
  public hotelBlog: blogs[];
  public cabBlog: blogs[];
  public flightBlog: blogs[];

  constructor(private hotelService: HotelService){
    this.hotelService.blog().subscribe(response => {
      this.blog = response.blog;

      // Hotel Blog
      if (Array.isArray(this.hotelBlogId)) {
       this.hotelBlog = this.blog?.filter((item) => {
         return this.hotelBlogId.includes(item.id)
       })
     }

    // Cab Blog
     if (Array.isArray(this.cabBlogId)) {
        this.cabBlog = this.blog?.filter((item) => {
          return this.cabBlogId.includes(item.id)
        })
      }

      // Flight Blog
      if (Array.isArray(this.flightBlogId)) {
        this.flightBlog = this.blog?.filter((item) => {
          return this.flightBlogId.includes(item.id)
        })
      }
    });
  }
}
