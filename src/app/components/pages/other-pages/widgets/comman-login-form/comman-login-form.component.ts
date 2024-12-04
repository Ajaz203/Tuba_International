import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-comman-login-form',
    templateUrl: './comman-login-form.component.html',
    styleUrl: './comman-login-form.component.scss',
    standalone: true
})
export class CommanLoginFormComponent {

  @Input() type: string;

}
