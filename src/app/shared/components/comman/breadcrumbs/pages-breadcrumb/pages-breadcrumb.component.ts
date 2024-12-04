import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pages-breadcrumb',
    templateUrl: './pages-breadcrumb.component.html',
    styleUrl: './pages-breadcrumb.component.scss',
    standalone: true
})
export class PagesBreadcrumbComponent {

  @Input() bg_image: string;
  @Input() title: string;
  @Input() parent: string;
  @Input() child: string;
  @Input() paddingClass: boolean;
  
}
