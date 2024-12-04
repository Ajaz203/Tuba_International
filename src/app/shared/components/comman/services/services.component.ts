import { Component, Input } from '@angular/core';
import { service } from '../../../../shared/interface/hotel-classic';
import { ServiceThreeComponent } from './service-three/service-three.component';
import { ServiceTwoComponent } from './service-two/service-two.component';
import { ServiceOneComponent } from './service-one/service-one.component';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    standalone: true,
    imports: [ServiceOneComponent, ServiceTwoComponent, ServiceThreeComponent]
})
export class ServicesComponent {

  @Input() type: string;
  @Input() service: service;

}
