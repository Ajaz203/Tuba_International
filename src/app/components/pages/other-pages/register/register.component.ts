import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CommanLoginFormComponent } from '../widgets/comman-login-form/comman-login-form.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, AnimationComponent, CommanLoginFormComponent, FooterComponent, LayoutComponent]
})
export class RegisterComponent {
  
  public bg_image = 'assets/images/inner-pages/coming-soon2.jpg';
  public title = 'sign up';
  public parent = 'Home';
  public child = 'sign up';

  constructor(){}

}
