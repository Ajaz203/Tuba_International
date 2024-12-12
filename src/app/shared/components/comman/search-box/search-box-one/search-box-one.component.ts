import { Component, HostListener, inject, Input, TemplateRef } from '@angular/core';
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
  onSubmit() {
    this.isLoading = true;
    if (this.hotelSearchForm.valid) {
      console.log(this.hotelSearchForm.value);
  
      this.hotelService.hotelSearch(this.hotelSearchForm.value).subscribe(
        (res) => {
          const response = res as any;
  
          if (response && response.data && response.data.properties) {
            // Process the hotel data
            this.hotels = response.data.properties.map((property: any) => ({
              name: property.name,
              rating: property.overall_rating,
              image: property.images?.[0]?.thumbnail || 'default-image-url.jpg', 
              price: property.rate_per_night?.extracted_lowest || 'N/A', // Extract lowest price
            }));
            this.isLoading = false;
            // Update paginated data
            this.updatePage();
          } else {
            console.error('Invalid response format', res);
            this.hotels = [];
            this.updatePage();
          }
        },
        (error) => {
          console.error('Error fetching hotels:', error);
          this.hotels = [];
          this.updatePage();
        }
      );
    } else {
      console.log('Form is not valid');
    }
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
        hotelPrice
      };
  
      console.log('Booking Form Data:', bookingData); // Log the complete form data
  
      this.hotelService.hotelBooking(bookingData).subscribe(
        (res) => {
          console.log('Booking successful', res);
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


