import { Component } from '@angular/core';

@Component({
    selector: 'app-flight-loader',
    templateUrl: './flight-loader.component.html',
    styleUrl: './flight-loader.component.scss',
    standalone: true
})
export class FlightLoaderComponent {

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 4000);
  }
}
