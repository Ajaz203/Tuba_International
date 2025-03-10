import { Component, Input } from '@angular/core';
import { bookmark } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-user-dashboard-bookmark',
    templateUrl: './user-dashboard-bookmark.component.html',
    styleUrl: './user-dashboard-bookmark.component.scss',
    standalone: true
})
export class UserDashboardBookmarkComponent {

  @Input() bookmark: bookmark[];

}
