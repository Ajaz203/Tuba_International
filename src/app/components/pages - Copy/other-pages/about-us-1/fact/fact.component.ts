import { Component, Input } from '@angular/core';
import { fact } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-fact',
    templateUrl: './fact.component.html',
    styleUrl: './fact.component.scss',
    standalone: true
})
export class FactComponent {

  @Input() fact: fact[];

}
