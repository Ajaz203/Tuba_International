import { Component, HostListener, inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule ,FormArray} from '@angular/forms';
import { HotelService } from '../../../../services/hotel.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-search-box-one',
    templateUrl: './search-box-one.component.html',
    styleUrls: ['./search-box-one.component.scss'],
    standalone: true,
    imports: [NgClass, CommonModule,ReactiveFormsModule],
    styles: `
		.dark-modal .modal-content {
			background-color: #292b2c;
			color: white;
		}
		.dark-modal .close {
			color: white;
		}
		.light-blue-backdrop {
			background-color: #5cb3fd;
		}
	`,
})
export class SearchBoxOneComponent {
  private exchangeRateUSDToINR: number = 83;
  hotels: any[] = []; 
  pagedHotels: any[] = [];
  currentPage = 0;
  itemsPerPage = 8 ;
  totalPages = 0; 
  selectedHotelName: string = '';
  selectedHotelPrice: number = 0;
  private modalService = inject(NgbModal);
  public isLoading : boolean = false;


  @Input() text: boolean = false;
  @Input() borderClass: boolean = false;
  @Input() searchFix: boolean = false;
  @Input() shadow: boolean;

  public searchFixed: boolean = false;
  public guest: number = 1;

  hotelSearchForm: FormGroup;
bookingForm: FormGroup<any>;
// hotels: any;

  @ViewChild('searchResultsModal') searchResultsModal!: TemplateRef<any>;
  @ViewChild('content') bookingModal!: TemplateRef<any>;

  constructor(private fb: FormBuilder, private hotelService: HotelService) {

    

 
    this.bookingForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      travellers: this.fb.array([this.createTravellerGroup()]),
    });
  

    this.updatePage();

    this.hotelSearchForm = this.fb.group({
      q: ['', [Validators.required]],
      check_in_date: ['', Validators.required],
      check_out_date: ['', Validators.required], 
      guests: [this.guest, [Validators.required, Validators.min(1)]], 
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.searchFixed = true;
    } else {
      this.searchFixed = false;
    }
  }
  
  changeValue(value: number) {
    const currentGuests = this.hotelSearchForm.get('guests')?.value;
    const newGuests = currentGuests + value;
    if (newGuests >= 1) {
      this.hotelSearchForm.patchValue({ guests: newGuests });
      this.guest = newGuests;
    }
  }
  // search hotels function
 // ... existing imports ...

onSubmit() {
  if (this.hotelSearchForm.valid) {
    this.isLoading = true;
    this.hotelService.hotelSearch(this.hotelSearchForm.value).subscribe({
      next: (res: any) => {
        if (res?.data?.properties) {
          this.hotels = res.data.properties.map((property: any) => ({
            name: property.name,
            rating: property.overall_rating,
            image: property.images?.[0]?.thumbnail || 'default-image-url.jpg',
            price: this.convertToINR(property.rate_per_night?.extracted_lowest),
            originalPrice: property.rate_per_night?.extracted_lowest
          }));
          
          this.updatePage();
          // Open modal with results
          this.modalService.open(this.searchResultsModal, {
            size: 'xl',
            scrollable: true,
            centered: true
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Search error:', error);
        this.isLoading = false;
      }
    });
  }
}

private convertToINR(usdPrice: number | string): number {
  if (!usdPrice || isNaN(Number(usdPrice))) return 0;
  const cleanPrice = typeof usdPrice === 'string' 
    ? parseFloat(usdPrice.replace(/[^0-9.]/g, ''))
    : usdPrice;
  return Math.round(cleanPrice * this.exchangeRateUSDToINR);
}
  
  

  updatePage() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedHotels = this.hotels.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(this.hotels.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePage();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePage();
    }
  }
  openModel(content: TemplateRef<any>, hotel: any) {
    this.selectedHotelName = hotel.name; // Set the selected hotel's name
    this.selectedHotelPrice = hotel.price; // Store the price of the selected hotel
    this.modalService.open(content, { centered: true });
  }
  // open(content: TemplateRef<any>) {
	// 	this.modalService.open(content, { centered: true });
	// }







  get travellers() {
    return this.bookingForm.get('travellers') as FormArray;
  }

  createTravellerGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  increaseTraveller() {
    this.travellers.push(this.createTravellerGroup());
  }

  decreaseTraveller() {
    if (this.travellers.length > 1) {
      this.travellers.removeAt(this.travellers.length - 1);
    }
  }
  getHotelPrice() {
    return this.selectedHotelPrice; // Return the price of the selected hotel
  }
  // Submit the booking form
  submitForm() {
    if (this.bookingForm.valid) {
      const checkInDate = new Date(this.bookingForm.value.checkIn);
      const checkOutDate = new Date(this.bookingForm.value.checkOut);
      
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const numberOfDays = timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days
  
      // Fetch the hotel price
      const hotelPrice = this.getHotelPrice(); // Get the price for the selected hotel
  
      const bookingData = {
        ...this.bookingForm.value,
        numberOfDays,
        hotelPrice,
        selectedHotelName: this.selectedHotelName, 
        selectedHotelImage: this.hotels.find(hotel => hotel.name === this.selectedHotelName)?.image,     
        selectedHotelRating: this.hotels.find(hotel => hotel.name === this.selectedHotelName)?.rating
      };
  
      console.log('Booking Form Data:', bookingData); // Log the complete form data
  
      this.hotelService.hotelBooking(bookingData).subscribe(
        (res) => {
          console.log('Booking successful', res);
          this.modalService.dismissAll();
        },
        (error) => {
          console.error('Booking failed', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  
}


