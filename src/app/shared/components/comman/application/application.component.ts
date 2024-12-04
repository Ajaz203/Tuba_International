import { Component, Input } from '@angular/core';
import { ApplicationTwoComponent } from './application-two/application-two.component';
import { ApplicationOneComponent } from './application-one/application-one.component';

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss'],
    standalone: true,
    imports: [ApplicationOneComponent, ApplicationTwoComponent]
})
export class ApplicationComponent {

  @Input() type: string;

}
