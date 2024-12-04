import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
    standalone: true,
    imports: [GoogleMapsModule]
})
export class GoogleMapComponent {

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 5
  };
}
