import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-breadcrumb',
    templateUrl: './restaurant-breadcrumb.component.html',
    styleUrl: './restaurant-breadcrumb.component.scss',
    standalone: true,
    imports: [NgClass, FormsModule, RouterLink]
})
export class RestaurantBreadcrumbComponent {

  @Input() sectionClass: string;

}
