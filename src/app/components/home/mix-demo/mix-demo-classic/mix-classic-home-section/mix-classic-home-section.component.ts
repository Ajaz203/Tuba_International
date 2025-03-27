import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';

@Component({
    selector: 'app-mix-classic-home-section',
    templateUrl: './mix-classic-home-section.component.html',
    styleUrls: ['./mix-classic-home-section.component.scss'],
    standalone: true,
    imports: [SearchBoxComponent, CommonModule]
})
export class MixClassicHomeSectionComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  public activeTab: string = 'hotel';
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

  ngAfterViewInit() {
    this.playVideo();
  }

  private playVideo() {
    const video = this.videoElement.nativeElement;
    if (video) {
      // Force video to load
      video.load();
      
      // Set video properties
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Video playing successfully');
        }).catch((error: any) => {
          console.log('Video autoplay failed:', error);
          // Try to play again after user interaction
          document.addEventListener('click', () => {
            video.play().catch((e: any) => console.log('Video play failed:', e));
          }, { once: true });
        });
      }
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
