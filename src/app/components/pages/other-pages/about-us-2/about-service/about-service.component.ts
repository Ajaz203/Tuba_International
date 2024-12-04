import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { aboutService } from '../../../../../shared/interface/pages';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
    selector: 'app-about-service',
    templateUrl: './about-service.component.html',
    styleUrl: './about-service.component.scss',
    standalone: true,
    imports: [SvgIconComponent, NgbRating]
})
export class AboutServiceComponent {

  @Input() services: aboutService[];

  constructor(private config: NgbRatingConfig) {
		this.config.max = 5;
		this.config.readonly = true;
	}
}
