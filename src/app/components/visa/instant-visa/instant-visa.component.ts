import { Component } from '@angular/core';
import { PagesService } from '../../../shared/services/pages.service';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { BreadcrumbsComponent } from '../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-instant-visa',
  standalone: true,
  providers: [PagesService],
  templateUrl: './instant-visa.component.html',
 styleUrl:'./instant-visa.component.scss',
  imports: [LayoutComponent, FooterComponent, BreadcrumbsComponent, HeaderComponent]
})
export class InstantVisaComponent {

}