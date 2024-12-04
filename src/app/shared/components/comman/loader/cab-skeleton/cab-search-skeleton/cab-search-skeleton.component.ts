import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-search-skeleton',
    templateUrl: './cab-search-skeleton.component.html',
    styleUrl: './cab-search-skeleton.component.scss',
    standalone: true,
    imports: [NgClass, FormsModule]
})
export class CabSearchSkeletonComponent {

  @Input() skeletonType: string;
  @Input() map: boolean;

}
