import { Component, inject, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CabService } from '../../../../services/cab.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
  standalone: true,
  imports: [ ReactiveFormsModule],
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

export class BookingFormComponent {
  bookingForm: FormGroup;
  bookingDetails:any;
  private modalService = inject(NgbModal);

  constructor(private fb: FormBuilder, private cabBookingService: CabService) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      contact_no: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
      pickupAddress: ['', Validators.required],
      dropAddress: ['', Validators.required],
      pickupTime: ['', Validators.required],
      dropTime: ['', Validators.required],
      vehicleType: ['', Validators.required],
      remarks: ['']
    });
  }

  
	open(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
    submitForm(content: TemplateRef<any>) {
        if (this.bookingForm.valid) {
          this.cabBookingService.cabBooking(this.bookingForm.value).subscribe(
            (res) => {
                this.bookingDetails= res;
              console.log('Booking successful', res);
              this.open(content); 
            },
            (error) => {
              console.error('Booking failed', error);
            }
          );
        } else {
          alert('Please fill in all required fields correctly.');
        }
      }


    //   submitForm(content: TemplateRef<any>) {
    //     if (this.bookingForm.valid) {
         
          
    //           this.open(content); 
           
    
    //     } else {
    //       alert('Please fill in all required fields correctly.');
    //     }
    //   }
      
      
}
