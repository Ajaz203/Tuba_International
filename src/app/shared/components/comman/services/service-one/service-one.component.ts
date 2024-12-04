import { Component, Input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';

@Component({
    selector: 'app-service-one',
    templateUrl: './service-one.component.html',
    styleUrls: ['./service-one.component.scss'],
    standalone: true
})
export class ServiceOneComponent {

  @Input() service: service;

}
