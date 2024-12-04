import { Component } from '@angular/core';
import { cabDetails } from '../../../../shared/interface/cab';
import { CabService } from '../../../../shared/services/cab.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CabSinglePageContactComponent } from '../widgets/cab-single-page-contact/cab-single-page-contact.component';
import { CabSinglePageFilterComponent } from '../widgets/cab-single-page-filter/cab-single-page-filter.component';
import { CabSinglePageDetailComponent } from '../widgets/cab-single-page-detail/cab-single-page-detail.component';
import { CabGalleryComponent } from '../widgets/cab-gallery/cab-gallery.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-single-detail',
    templateUrl: './cab-single-detail.component.html',
    styleUrl: './cab-single-detail.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, CabGalleryComponent, CabSinglePageDetailComponent, CabSinglePageFilterComponent, CabSinglePageContactComponent, FooterComponent, LayoutComponent]
})
export class CabSingleDetailComponent {

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab detail';
  public parent = 'Home';
  public child = 'cab detail';

  public cabDetails: cabDetails;

  constructor(private cabService: CabService){
    this.cabService.cabPage().subscribe(response => {
      this.cabDetails = response
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
