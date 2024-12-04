import { Component, Input } from '@angular/core';
import { SubscribeTwoComponent } from './subscribe-two/subscribe-two.component';
import { SubscribeOneComponent } from './subscribe-one/subscribe-one.component';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss'],
    standalone: true,
    imports: [SubscribeOneComponent, SubscribeTwoComponent]
})
export class SubscribeComponent {

  @Input() type: string;

}
