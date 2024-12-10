import { Component } from '@angular/core';
import { PagesService } from '../../../shared/services/pages.service';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { BreadcrumbsComponent } from '../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instant-visa',
  standalone: true,
  providers: [PagesService],
  templateUrl: './instant-visa.component.html',
 styleUrl:'./instant-visa.component.scss',
  imports: [LayoutComponent,CommonModule, FooterComponent, BreadcrumbsComponent, HeaderComponent]
})
export class InstantVisaComponent {
  visas = [
    { 
      country: 'Turkey', 
      imageUrl: '/assets/visa/Turkey1.png', 
      dateTime: '15 Dec, 10:30 AM' 
    },
    { 
      country: 'Bali', 
      imageUrl: '/assets/visa/bali.png', 
      dateTime: '20 Dec, 02:00 PM' 
    },
    { 
      country: 'Croatia', 
      imageUrl: '/assets/visa/Croatia1.png', 
      dateTime: '22 Dec, 09:15 AM' 
    },
    { 
      country: 'Finland', 
      imageUrl: '/assets/visa/Finland1.png', 
      dateTime: '25 Dec, 11:45 AM' 
    },
    { 
      country: 'Germany', 
      imageUrl: '/assets/visa/Germany.png', 
      dateTime: '25 Dec, 07:04 AM' 
    },
    { 
      country: 'Greece', 
      imageUrl: '/assets/visa/Greece1.png', 
      dateTime: '28 Dec, 08:30 AM' 
    },
    { 
      country: 'United Kingdom', 
      imageUrl: '/assets/visa/UnitedKingdom1.png', 
      dateTime: '30 Dec, 03:20 PM' 
    },
    { 
      country: 'Iceland', 
      imageUrl: '/assets/visa/Iceland1.png', 
      dateTime: '01 Jan, 06:00 AM' 
    },
    { 
      country: 'Italy', 
      imageUrl: '/assets/visa/itly1.png', 
      dateTime: '05 Jan, 09:00 AM' 
    },
    { 
      country: 'Hungary', 
      imageUrl: '/assets/visa/Hungary1.png', 
      dateTime: '08 Jan, 12:30 PM' 
    },
    { 
      country: 'Singapore', 
      imageUrl: '/assets/visa/Singapore1.png', 
      dateTime: '10 Jan, 07:15 AM' 
    },
    {
      country: 'Iceland',
      imageUrl: 'assets/visa/Iceland1.png',
      locationIcon: '/visa-booking/content/visa/img/loctnicn.svg',
      dateTime: '25 Dec, 07:04 AM'
    },
    {
      country: 'China',
      imageUrl: '/assets/visa/China1.png',
      locationIcon: '/visa-booking/content/visa/img/loctnicn.svg',
      dateTime: '20 Dec, 07:04 AM'
    },
    {
      country: 'Germany',
      imageUrl: '/assets/visa/CzechRepublic1.png',
      locationIcon: '/visa-booking/content/visa/img/loctnicn.svg',
      dateTime: '25 Dec, 07:04 AM'
    },
    {
      country: 'Japan',
      imageUrl: '/assets/visa/Dubai1.png',
      locationIcon: '/visa-booking/content/visa/img/loctnicn.svg',
      dateTime: '25 Dec, 07:04 AM'
    },
    {
      country: 'Philippines',
      imageUrl: '/assets/visa/Philippines.png',
      dateTime: '25 Dec, 07:04 AM'
    }
  ];
}