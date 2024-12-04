import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-booking-failed',
    templateUrl: './cab-booking-failed.component.html',
    styleUrl: './cab-booking-failed.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FooterComponent, LayoutComponent]
})
export class CabBookingFailedComponent {

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'payment failed';
  public parent = 'Home';
  public child = 'payment failed';

  constructor() {}

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
