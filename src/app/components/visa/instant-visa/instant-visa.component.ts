import { Component, Input } from '@angular/core';
import { PagesService } from '../../../shared/services/pages.service';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { BreadcrumbsComponent } from '../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { TouristcardComponent } from '../touristcard/touristcard.component';

@Component({
  selector: 'app-instant-visa',
  standalone: true,
  providers: [PagesService],
  templateUrl: './instant-visa.component.html',
  styleUrls: ['./instant-visa.component.scss',], 
  imports: [LayoutComponent, FooterComponent, BreadcrumbsComponent, HeaderComponent, TouristcardComponent] 
})
export class InstantVisaComponent {
  @Input() image!: string; 
  @Input() location!: string;
  @Input() date!: string;
  @Input() time!: string
  cards = [
    {
      image: '/assets/imges2/japan.jpg',
      location: 'Iceland',
      date: '24 Dec',
      time: '10:25 PM',
    },
    {
      image: '/assets/imges2/japan.jpg',
      location: 'China',
      date: '19 Dec',
      time: '10:25 PM',
    },
    {
      image: '/assets/imges2/japan.jpg',
      location: 'United Arab Emirates',
      date: '14 Dec',
      time: '10:25 PM',
    },
    {
      image: '/assets/imges2/japan.jpg',
      location: 'Czech Republic',
      date: '28 Dec',
      time: '10:25 PM',
    },
    // Add more cards here
  ];
}
