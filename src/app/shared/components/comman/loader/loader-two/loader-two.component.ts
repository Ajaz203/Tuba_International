import { Component } from '@angular/core';

@Component({
    selector: 'app-loader-two',
    templateUrl: './loader-two.component.html',
    styleUrls: ['./loader-two.component.scss'],
    standalone: true
})
export class LoaderTwoComponent {

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 5000);
  }
}
