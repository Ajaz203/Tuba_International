import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LeafletMapComponent } from '../../details/leaflet-map/leaflet-map.component';
import { FilterComponent } from '../../filter/filter.component';

@Component({
    selector: 'app-leaflet-map-modal',
    templateUrl: './leaflet-map-modal.component.html',
    styleUrls: ['./leaflet-map-modal.component.scss'],
    standalone: true,
    imports: [FilterComponent, LeafletMapComponent]
})
export class LeafletMapModalComponent {

  @Input() filterType: string;

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }
}
