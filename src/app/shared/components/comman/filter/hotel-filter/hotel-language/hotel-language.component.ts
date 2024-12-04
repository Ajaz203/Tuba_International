import { Component, Input } from '@angular/core';
import { hotelLanguage } from '../../../../../../shared/components/data/data/filter/hotel';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-hotel-language',
    templateUrl: './hotel-language.component.html',
    styleUrls: ['./hotel-language.component.scss'],
    standalone: true,
    imports: [NgStyle]
})
export class HotelLanguageComponent {

  public isOpenLanguage: boolean = true;
  public hotelLanguage = hotelLanguage;
  public selectedLanguage: string[] = [];

  openLanguage(){
    this.isOpenLanguage =! this.isOpenLanguage;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedLanguage = params['language'] ? params['language'].split(",") : []
      })
     }

  applyFilter(event: Event){
    const index = this.selectedLanguage.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedLanguage.push((event.target as HTMLInputElement).value)
    }else {
      this.selectedLanguage.splice(index,1)
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { language: this.selectedLanguage.length ? this.selectedLanguage.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedLanguage?.includes(item)){
      return true;
    }
    return false;
  }
}
