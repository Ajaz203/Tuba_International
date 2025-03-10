import { Component, Input } from '@angular/core';
import { faqDetails } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-faq-details',
    templateUrl: './faq-details.component.html',
    styleUrl: './faq-details.component.scss',
    standalone: true
})
export class FaqDetailsComponent {

  @Input() faqDetails: faqDetails[];

}
