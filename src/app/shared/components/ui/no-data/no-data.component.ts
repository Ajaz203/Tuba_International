import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-no-data',
    templateUrl: './no-data.component.html',
    styleUrl: './no-data.component.scss',
    standalone: true
})
export class NoDataComponent {

  @Input() icon: string;
  @Input() title: string;
  @Input() description: string;
  @Input() ImageClass: boolean = false;
  
}
