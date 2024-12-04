import { Component } from '@angular/core';
import * as L from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
    selector: 'app-leaflet-map',
    templateUrl: './leaflet-map.component.html',
    styleUrls: ['./leaflet-map.component.scss'],
    standalone: true,
    imports: [LeafletModule]
})

export class LeafletMapComponent {

  public map: L.Map;
  public markers: L.Marker[] = [];
  public options: L.MapOptions = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 12,
    center: L.latLng(20.5937, 78.9629),
  };

  constructor(){}
  initMarkers() {
    // Static Data For Map Markers
    const initialMarkers: any[] = [
      {
        name: 'sea view',
        position: [25.206426, 55.346465],
        map_image_url: 'assets/images/hotel/gallery/1.jpg',
        price: '$1200',
        rating: 'four-star',
        rate: 4,
        draggable: true
      },
      {
          name: 'Rose Temple',
          position: [25.222578, 55.319011],
          map_image_url: 'assets/images/hotel/video-image.jpg',
          price: '$1200',
          rating: 'three-star',
          rate: 3,
          draggable: true
      },
      {
          name: 'Isle Resort',
          position: [25.209843, 55.293616],
          map_image_url: 'assets/images/hotel/room/3.jpg',
          price: '$1200',
          rating: 'five-star',
          rate: 5,
          draggable: true
      },
      {
          name: 'Hotel Mansion',
          position: [25.229721, 55.328229],
          map_image_url: 'assets/images/hotel/gallery/3.jpg',
          price: '$1200',
          rating: 'two-star',
          rate: 2,
          draggable: true
      }
    ];
    initialMarkers.forEach((data, index) => {
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<div class="infoBox"><div class="marker-detail"><img src="${data.map_image_url}" alt="Image"><div class="detail-part"><h6>${data.name}</h6><div class="rating ${data.rating}"><ngb-rating [rate]="${data.rate}"></ngb-rating></div><span>${data.price}</span><a href="javascript:void(0)">Details</a></div></div></div> `);
      this.map.panTo(data.position);
      this.markers.push(marker);
    });

     L.Icon.Default.mergeOptions({
        iconUrl: 'assets/images/icon/marker-icon.png',
        shadowUrl: 'assets/images/leaflet/marker-shadow.png'
    });
  }

  generateMarker(data: { position: L.LatLngExpression; draggable: boolean }, index: number) {
    return L.marker(data.position, { draggable: data.draggable })
      .on('click', (event: L.LeafletMouseEvent) => this.markerClicked(event, index))
      .on('dragend', (event: any) => this.markerDragEnd(event, index));
  }

  onMapReady($event: L.Map) {
    this.map = $event;
    this.initMarkers();
  }

  mapClicked($event: L.LeafletMouseEvent) {}

  markerClicked($event: L.LeafletMouseEvent, index: number) {}

  markerDragEnd($event: L.LeafletMouseEvent, index: number) {}
}
