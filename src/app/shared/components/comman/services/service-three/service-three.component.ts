import { Component, Input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';
import { RouterLink } from '@angular/router';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
    selector: 'app-service-three',
    templateUrl: './service-three.component.html',
    styleUrls: ['./service-three.component.scss'],
    standalone: true,
    imports: [SvgIconComponent, NgbRating, RouterLink]
})
export class ServiceThreeComponent {

  @Input() service: service;

}
