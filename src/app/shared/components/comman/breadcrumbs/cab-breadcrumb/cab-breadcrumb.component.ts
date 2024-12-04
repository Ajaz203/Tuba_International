import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cab-breadcrumb',
    templateUrl: './cab-breadcrumb.component.html',
    styleUrl: './cab-breadcrumb.component.scss',
    standalone: true
})
export class CabBreadcrumbComponent {

  @Input() bg_image: string;
  @Input() title: string;
  @Input() parent: string;
  @Input() child: string;
  
}
