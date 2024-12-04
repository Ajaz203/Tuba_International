import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapComponent } from '../../details/google-map/google-map.component';
import { FilterComponent } from '../../filter/filter.component';

@Component({
    selector: 'app-google-map-modal',
    templateUrl: './google-map-modal.component.html',
    styleUrls: ['./google-map-modal.component.scss'],
    standalone: true,
    imports: [FilterComponent, GoogleMapComponent]
})
export class GoogleMapModalComponent {

  @Input() filterType: string;

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }
}
