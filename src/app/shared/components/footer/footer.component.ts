import { Component, Input } from '@angular/core';
import { CopyRightComponent } from './widgets/copy-right/copy-right.component';
import { SocialMediaComponent } from './widgets/social-media/social-media.component';
import { NewTopicComponent } from './widgets/new-topic/new-topic.component';
import { UsefulLinksComponent } from './widgets/useful-links/useful-links.component';
import { TopPlacesComponent } from './widgets/top-places/top-places.component';
import { LocationComponent } from './widgets/location/location.component';
import { AboutComponent } from './widgets/about/about.component';
import { ContactComponent } from './widgets/contact/contact.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [NgClass, NgStyle, ContactComponent, AboutComponent, LocationComponent, TopPlacesComponent, UsefulLinksComponent, NewTopicComponent, SocialMediaComponent, CopyRightComponent]
})
export class FooterComponent {

  @Input() type: string;
  @Input() location: boolean;
  @Input() places: boolean;
  @Input() sticky:boolean;
  @Input() bgImage: boolean = false;
  @Input() subFooter: boolean = true;
  @Input() footerClass: boolean = false;
  
}
