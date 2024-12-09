import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';

@Component({
    selector: 'app-mix-classic-home-section',
    templateUrl: './mix-classic-home-section.component.html',
    styleUrls: ['./mix-classic-home-section.component.scss'],
    standalone: true,
    imports: [SearchBoxComponent]
})
export class MixClassicHomeSectionComponent {

  public activeTab: string = 'flight';
  public searchBoxType: string;

  constructor(){
    if(this.activeTab == 'hotel'){
      this.searchBoxType = 'basic'
    }else if(this.activeTab == 'holiday'){
      this.searchBoxType = 'holiday'
    }else if(this.activeTab == 'flight'){
      this.searchBoxType = 'flight-two'
    }else if(this.activeTab == 'cab'){
      this.searchBoxType = 'cab-two'
    }else if(this.activeTab == 'visa'){
      this.searchBoxType = 'visa'
    }
  }

  tabbed(value: string){
    this.activeTab = value

    if(value == 'hotel'){
      this.searchBoxType = 'basic'
    }else if(value == 'holiday'){
      this.searchBoxType = 'holiday'
    }else if(value == 'flight'){
      this.searchBoxType = 'flight-two'
    }else if(value == 'cab'){
      this.searchBoxType = 'cab-two'
    }else if(value == 'visa'){
      this.searchBoxType = 'food'
    }
  }
}
