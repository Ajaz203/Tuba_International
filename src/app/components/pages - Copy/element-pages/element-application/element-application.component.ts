import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourModernAppComponent } from '../../../home/tour-demo/tour-demo-modern/tour-modern-app/tour-modern-app.component';
import { CabModernApplicationComponent } from '../../../home/cab-demo/cab-demo-modern/cab-modern-application/cab-modern-application.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-application',
    templateUrl: './element-application.component.html',
    styleUrl: './element-application.component.scss',
    standalone: true,
    imports: [HeaderComponent, CabModernApplicationComponent, TourModernAppComponent, FooterComponent, LayoutComponent]
})
export class ElementApplicationComponent {
  
  constructor(){}
  
}
