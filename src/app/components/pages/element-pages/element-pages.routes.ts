import { Routes } from '@angular/router';
import { ElementAboutComponent } from './element-about/element-about.component';
import { ElementApplicationComponent } from './element-application/element-application.component';
import { ElementBlogComponent } from './element-blog/element-blog.component';
import { ElementButtonComponent } from './element-button/element-button.component';
import { ElementCategoryComponent } from './element-category/element-category.component';
import { ElementDateTimePickerComponent } from './element-date-time-picker/element-date-time-picker.component';
import { ElementFullBannerComponent } from './element-full-banner/element-full-banner.component';
import { ElementGalleryComponent } from './element-gallery/element-gallery.component';
import { ElementImageRatioComponent } from './element-image-ratio/element-image-ratio.component';
import { ElementOtherElementComponent } from './element-other-element/element-other-element.component';
import { ElementServiceComponent } from './element-service/element-service.component';
import { ElementSubscribeComponent } from './element-subscribe/element-subscribe.component';
import { ElementTestimonialComponent } from './element-testimonial/element-testimonial.component';
import { ElementTitleComponent } from './element-title/element-title.component';
import { ElementVideoComponent } from './element-video/element-video.component';

export default[
  {
    path: 'image-ratio',
    component: ElementImageRatioComponent
  },
  {
    path: 'about',
    component: ElementAboutComponent
  },
  {
    path: 'application',
    component: ElementApplicationComponent
  },
  {
    path: 'blog',
    component: ElementBlogComponent
  },
  {
    path: 'button',
    component: ElementButtonComponent
  },
  {
    path: 'category',
    component: ElementCategoryComponent
  },
  {
    path: 'date-time-picker',
    component: ElementDateTimePickerComponent
  },
  {
    path: 'full-banner',
    component: ElementFullBannerComponent
  },
  {
    path: 'gallery',
    component: ElementGalleryComponent
  },
  {
    path: 'other-element',
    component: ElementOtherElementComponent
  },
  {
    path: 'service',
    component: ElementServiceComponent
  },
  {
    path: 'subscribe',
    component: ElementSubscribeComponent
  },
  {
    path: 'testimonial',
    component: ElementTestimonialComponent
  },
  {
    path: 'title',
    component: ElementTitleComponent
  },
  {
    path: 'video',
    component: ElementVideoComponent
  }
] as Routes;
