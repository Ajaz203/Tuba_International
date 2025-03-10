import { Component, Input } from '@angular/core';
import { blogFilter } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-blog-filter',
    templateUrl: './blog-filter.component.html',
    styleUrl: './blog-filter.component.scss',
    standalone: true
})
export class BlogFilterComponent {

  @Input() blogFilter: blogFilter[];

}
