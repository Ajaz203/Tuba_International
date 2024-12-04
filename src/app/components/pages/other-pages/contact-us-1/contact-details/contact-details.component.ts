import { Component, Input } from '@angular/core';
import { contact } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrl: './contact-details.component.scss',
    standalone: true
})
export class ContactDetailsComponent {

  @Input() contact: contact;

}
