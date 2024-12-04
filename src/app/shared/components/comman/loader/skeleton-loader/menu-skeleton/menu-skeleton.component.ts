import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-menu-skeleton',
    templateUrl: './menu-skeleton.component.html',
    styleUrls: ['./menu-skeleton.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class MenuSkeletonComponent {

  @Input() skeletonType: string;

}
