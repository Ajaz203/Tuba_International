import { Component, Input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { BlogComponent } from '../../../../../shared/components/comman/blog/blog.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../../shared/components/comman/animation/animation.component';

@Component({
    selector: 'app-cab-modern-blog',
    templateUrl: './cab-modern-blog.component.html',
    styleUrls: ['./cab-modern-blog.component.scss'],
    standalone: true,
    imports: [AnimationComponent, TitleComponent, BlogComponent]
})
export class CabModernBlogComponent {

  @Input() id: number[];
  @Input() title: boolean = true;
  @Input() animation: boolean = true;

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
