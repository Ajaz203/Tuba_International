import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CommanLoginFormComponent } from '../widgets/comman-login-form/comman-login-form.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrl: './log-in.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, AnimationComponent, CommanLoginFormComponent, FooterComponent, LayoutComponent]
})
export class LogInComponent {
  
  public bg_image = 'assets/images/inner-pages/coming-soon2.jpg';
  public title = 'log in';
  public parent = 'Home';
  public child = 'log in';

  constructor(){}

}
