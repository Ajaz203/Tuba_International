import { Component } from '@angular/core';
import { otherPages } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-contact-us-1',
    templateUrl: './contact-us-1.component.html',
    styleUrl: './contact-us-1.component.scss',
    standalone: true,
    imports: [HeaderComponent, ContactFormComponent, ContactDetailsComponent, FooterComponent, LayoutComponent]
})
export class ContactUs1Component {
  
  public contactDetails: otherPages;

  constructor(private pageService: PagesService){
    this.pageService.pages().subscribe(response => {
      this.contactDetails = response.otherPages
    })
  }
}
