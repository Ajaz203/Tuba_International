import { Component } from '@angular/core';

@Component({
    selector: 'app-loader-one',
    templateUrl: './loader-one.component.html',
    styleUrls: ['./loader-one.component.scss'],
    standalone: true
})
export class LoaderOneComponent {

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 4000);
  }
}
