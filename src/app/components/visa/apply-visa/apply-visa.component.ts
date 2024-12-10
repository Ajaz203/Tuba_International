import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';
import { PagesService } from '../../../shared/services/pages.service';
@Component({
  selector: 'app-apply-visa',
  standalone: true,
  providers: [PagesService],
  templateUrl: './apply-visa.component.html',
  styleUrl: './apply-visa.component.scss',
  imports:[HeaderComponent,FooterComponent,LayoutComponent]
})
export class ApplyVisaComponent {


}
