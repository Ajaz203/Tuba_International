import { Component } from '@angular/core';
import { category } from '../../../../shared/interface/tour-modern';
import { CabService } from '../../../../shared/services/cab.service';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-demo-map',
    templateUrl: './cab-demo-map.component.html',
    styleUrls: ['./cab-demo-map.component.scss'],
    standalone: true,
    imports: [HeaderComponent, GoogleMapsModule, OwlDateTimeModule,OwlNativeDateTimeModule,NgClass, RouterLink, LayoutComponent]
})
export class CabDemoMapComponent {
  
  public selectedValue: string;

  public cabMapDemo: number[];
  public cab: category[];

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 6
  };

  constructor(private cabService: CabService, private tourService: TourService) {
    this.cabService.cabMapDemo().subscribe(response => {
      this.cabMapDemo = response.cab;
    })

    this.tourService.category().subscribe(response => {
      this.cab = response.category;

      if(Array.isArray(this.cabMapDemo)){
        this.cab = this.cab?.filter((data) => {
          return this.cabMapDemo.includes(data.id)
        })
      }
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','239, 63, 62');
  }

  sameLocation(event: Event){
    this.selectedValue = (event.target as HTMLInputElement).value;
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
