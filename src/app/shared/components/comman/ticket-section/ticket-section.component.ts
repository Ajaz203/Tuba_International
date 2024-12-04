import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { cabDetails } from '../../../../../app/shared/interface/cab-modern';
import { specialRoom } from '../../../../../app/shared/interface/hotel-classic';
import { VideoModalComponent } from '../modal/video-modal/video-modal.component';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-ticket-section',
    templateUrl: './ticket-section.component.html',
    styleUrls: ['./ticket-section.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class TicketSectionComponent {

  @Input() ticketSection: specialRoom[];
  @Input() cabDetails: cabDetails[];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor(private modal: NgbModal, public hotelService: HotelService){}

  openModal(){
    this.modal.open(VideoModalComponent, { size: 'lg', centered: true })
  }
}
