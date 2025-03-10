import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from '../../../../../shared/components/comman/modal/video-modal/video-modal.component';
import { blogComments, blogDetail } from '../../../../../shared/interface/pages';
import { BlogDetailsLeaveCommentComponent } from '../blog-details-leave-comment/blog-details-leave-comment.component';
import { BlogDetailsCommentsComponent } from '../blog-details-comments/blog-details-comments.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrl: './blog-details-page.component.scss',
    standalone: true,
    imports: [CarouselModule, BlogDetailsCommentsComponent, BlogDetailsLeaveCommentComponent]
})
export class BlogDetailsPageComponent {

  @Input() blogDetails: blogDetail;
  @Input() blogComments: blogComments[];
  @Input() imageSlider: boolean = false;
  @Input() video: boolean = false;

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1
      }
    }
  }

  constructor(private modal: NgbModal){}

  openVideoModal(){
    this.modal.open(VideoModalComponent, { size: 'lg', centered: true})
  }
}
