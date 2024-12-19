import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';
import { PagesService } from '../../../shared/services/pages.service';
import { BreadcrumbsComponent } from '../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { AnimationComponent } from '../../../shared/components/comman/animation/animation.component';

@Component({
  selector: 'app-apply-visa',
  standalone: true,
  providers: [PagesService],
  templateUrl: './apply-visa.component.html',
  styleUrl: './apply-visa.component.scss',
  imports:[HeaderComponent,FooterComponent,LayoutComponent,BreadcrumbsComponent,AnimationComponent]
})
export class ApplyVisaComponent {

  public bg_image = 'assets/imges2/breadcrumb1.jpg';
  public title = 'Visa';
  public parent = 'Home';
  public child = 'Apply Visa';

  public selectedTabValue: string;
  constructor() {}
}
