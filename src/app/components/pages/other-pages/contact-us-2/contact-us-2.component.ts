import { Component } from '@angular/core';
import { otherPages } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ContactFormComponent } from '../contact-us-1/contact-form/contact-form.component';
import { ContactDetailsComponent } from '../contact-us-1/contact-details/contact-details.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-contact-us-2',
    templateUrl: './contact-us-2.component.html',
    styleUrl: './contact-us-2.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, ContactDetailsComponent, ContactFormComponent, FooterComponent, LayoutComponent]
})
export class ContactUs2Component {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'contact us';
  public parent = 'Home';
  public child = 'contact us';

  public contactDetails: otherPages;

  constructor(private pageService: PagesService){
    this.pageService.pages().subscribe(response => {
      this.contactDetails = response.otherPages
    })
  }
}
