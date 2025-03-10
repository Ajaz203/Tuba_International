import { Component } from '@angular/core';
import { otherPages } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ContactDetailsComponent } from '../contact-us-1/contact-details/contact-details.component';
import { ContactFormComponent } from '../contact-us-1/contact-form/contact-form.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-contact-us-3',
    templateUrl: './contact-us-3.component.html',
    styleUrl: './contact-us-3.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, ContactFormComponent, ContactDetailsComponent, FooterComponent, LayoutComponent]
})
export class ContactUs3Component {
  
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
