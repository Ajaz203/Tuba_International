import { Component, Input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-service-two',
    templateUrl: './service-two.component.html',
    styleUrls: ['./service-two.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class ServiceTwoComponent {

  @Input() service: service;

}
