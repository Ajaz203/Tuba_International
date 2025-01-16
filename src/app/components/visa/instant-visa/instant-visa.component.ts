import { Component, Input } from '@angular/core';
import { PagesService } from '../../../shared/services/pages.service';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-instant-visa',
  standalone: true,
  providers: [PagesService],
  templateUrl: './instant-visa.component.html',
  styleUrl: './instant-visa.component.scss',
  imports: [LayoutComponent, CommonModule, FooterComponent, HeaderComponent, ReactiveFormsModule]
})
export class InstantVisaComponent {
  visaForm: FormGroup;
  evisaForm: FormGroup;
  showModal = false;
  showEvisaModal = false;
  message: string = '';  // Message content
  messageType: string = ''; 

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.visaForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      passengers: ['', [Validators.required, Validators.min(1)]],
      visaType: ['', Validators.required]
    });

    // E-visa form
    this.evisaForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      passengers: ['', [Validators.required, Validators.min(1)]],
      country: ['', Validators.required],
      visaType: ['', Validators.required]
    });
  }

  visas = [
    {
      country: 'Turkey',
      imageUrl: '/assets/visa/Turkey1.png',
      dateTime: '15 Dec, 10:30 AM'
    },
    {
      country: 'Bali',
      imageUrl: '/assets/visa/bali.png',
      dateTime: '20 Dec, 02:00 PM'
    },
    {
      country: 'Croatia',
      imageUrl: '/assets/visa/Croatia1.png',
      dateTime: '22 Dec, 09:15 AM'
    },
    {
      country: 'Finland',
      imageUrl: '/assets/visa/Finland1.png',
      dateTime: '25 Dec, 11:45 AM'
    },
    {
      country: 'Germany',
      imageUrl: '/assets/visa/Germany.png',
      dateTime: '25 Dec, 07:04 AM'
    },
    {
      country: 'Greece',
      imageUrl: '/assets/visa/Greece1.png',
      dateTime: '28 Dec, 08:30 AM'
    },
    {
      country: 'United Kingdom',
      imageUrl: '/assets/visa/UnitedKingdom1.png',
      dateTime: '30 Dec, 03:20 PM'
    },
    {
      country: 'Iceland',
      imageUrl: '/assets/visa/Iceland1.png',
      dateTime: '01 Jan, 06:00 AM'
    },
    {
      country: 'Italy',
      imageUrl: '/assets/visa/itly1.png',
      dateTime: '05 Jan, 09:00 AM'
    },
    {
      country: 'Hungary',
      imageUrl: '/assets/visa/Hungary1.png',
      dateTime: '08 Jan, 12:30 PM'
    },
    {
      country: 'Singapore',
      imageUrl: '/assets/visa/Singapore1.png',
      dateTime: '10 Jan, 07:15 AM'
    },
    {
      country: 'Iceland',
      imageUrl: 'assets/visa/Iceland1.png',
      locationIcon: '/visa-booking/content/visa/img/loctnicn.svg',
      dateTime: '25 Dec, 07:04 AM'
    },
    {
      country: 'China',
      imageUrl: '/assets/visa/China1.png',
      locationIcon: '/visa-booking/content/visa/img/loctnicn.svg',
      dateTime: '20 Dec, 07:04 AM'
    },
    {
      country: 'Germany',
      imageUrl: '/assets/visa/CzechRepublic1.png',
      locationIcon: '/visa-booking/content/visa/img/loctnicn.svg',
      dateTime: '25 Dec, 07:04 AM'
    },
    {
      country: 'Japan',
      imageUrl: '/assets/visa/Dubai1.png',
      locationIcon: '/visa-booking/content/visa/img/loctnicn.svg',
      dateTime: '25 Dec, 07:04 AM'
    },
    {
      country: 'Philippines',
      imageUrl: '/assets/visa/Philippines.png',
      dateTime: '25 Dec, 07:04 AM'
    }
  ];


  activeIndex: number | null = null;
  activeTab: string = 'hajj';

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
  faqItems = [
    { question: 'What documents are required to apply for a tourist visa?', 
      answer: [
        'Here’s the extensive list of crucial documents that every individual needs to submit for tourist visa application processing.' ,
        '-Tourist Application Form',
        '-Passport photocopies with minimum validity of 3 to 6 months and 2 blank pages',
        '-Travel insurance',
        '-Valid evidence for finances',
        '-Accommodation proof',
        '-Return flight ticket proof',
        '-Essential civil documents',
        'Other supporting documents',
      ]},
    { question: 'How many steps are usually involved in visa processing?',
       answer:
        ['When it comes to visa processing, then only 4 simple steps...',
        '-Applying online for Visa',
        '-Get an appointment for consultation',
        '-Submitting of essential documents for verification',
        '-Pay the amount, visit for an interview and on approval receive your Visa.',
        

  ]},
    { question: 'How long does it take to approve the tourist visa application?', answer: 'Presently, visa processing takes around 21 workdays from the date on which the embassy received your application. It may exceed up to 30 days in certain cases. We further advise you to avoid making travel plans until you receive your passport and the application process is completed.' },
    { question: 'Will I get the visa on an estimated date as mentioned on the platform?', answer: 'You will likely receive your visa on the estimated date mentioned on the platform. However, please note that visa processing times can be subject to change due to internal or external factors such as additional documentation requirements, security checks and change of policy (If any).' },
   { 
  question: 'Why do Visa applications get rejected?', 
  answer:  [
    'There are multiple reasons that can lead to visa rejections. Some of them include:-',
    '-Incomplete Application',
    '-Violation of Embassy Rules',
    '-Issues in Passport',
    '-Not Meeting the Criteria',
    '-Submission of Incomplete Travel Details',
    '-Insufficient Travel Insurance',
    '-Inadequate Amount of Funds',
    '-Issues in Visa in Interview',
    'These are the common reasons that can cause visa rejections. Therefore, we highly recommend you to be very careful and precise while filling your visa applications.'
  ]
},
    { question: 'Can I reapply for a visa after it has been rejected?', answer: 'Absolutely yes, you can further reapply for a visa if it was rejected previously.' },


  ];
  getAnswerWithLineBreaks(answer: string | string[]): string {
    const answerArray = Array.isArray(answer) ? answer : [answer];
    return answerArray.join('<br>'); 
  }
 

  countries = [
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'SG', name: 'Singapore' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'TH', name: 'Thailand' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'PH', name: 'Philippines' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'MX', name: 'Mexico' },
    { code: 'BR', name: 'Brazil' },
    { code: 'GR', name: 'Greece' },
    { code: 'PT', name: 'Portugal' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'IT', name: 'Italy' },
    { code: 'TR', name: 'Turkey' },
    { code: 'EG', name: 'Egypt' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'IN', name: 'India' },
    { code: 'RU', name: 'Russia' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CL', name: 'Chile' },
    { code: 'CO', name: 'Colombia' },
    { code: 'FI', name: 'Finland' },
    { code: 'NO', name: 'Norway' },
    { code: 'SE', name: 'Sweden' },
    { code: 'DK', name: 'Denmark' },
    { code: 'IE', name: 'Ireland' },
    { code: 'AT', name: 'Austria' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'BE', name: 'Belgium' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'HU', name: 'Hungary' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'HR', name: 'Croatia' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LV', name: 'Latvia' },
    { code: 'EE', name: 'Estonia' },
    { code: 'IS', name: 'Iceland' },
    { code: 'MT', name: 'Malta' },
    { code: 'PT', name: 'Portugal' },
    { code: 'MD', name: 'Moldova' },
    { code: 'AM', name: 'Armenia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'NP', name: 'Nepal' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'LA', name: 'Laos' },
    { code: 'BN', name: 'Brunei' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'WS', name: 'Samoa' },
    { code: 'TO', name: 'Tonga' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'NU', name: 'Niue' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'PW', name: 'Palau' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'GU', name: 'Guam' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'VI', name: 'U.S. Virgin Islands' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'BQ', name: 'Bonaire' },
    { code: 'CW', name: 'Curaçao' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'DM', name: 'Dominica' },
    { code: 'GD', name: 'Grenada' },
    { code: 'HT', name: 'Haiti' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TC', name: 'Turks and Caicos Islands' },
    { code: 'VG', name: 'British Virgin Islands' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'FM', name: 'Federated States of Micronesia' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'PW', name: 'Palau' },
    { code: 'WS', name: 'Samoa' },
    { code: 'TO', name: 'Tonga' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'NU', name: 'Niue' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'PW', name: 'Palau' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'GU', name: 'Guam' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'VI', name: 'U.S. Virgin Islands' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'BQ', name: 'Bonaire' },
    { code: 'CW', name: 'Curaçao' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'DM', name: 'Dominica' },
    { code: 'GD', name: 'Grenada' },
    { code: 'HT', name: 'Haiti' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TC', name: 'Turks and Caicos Islands' },
    { code: 'VG', name: 'British Virgin Islands' },
    { code: 'KY', name: 'Cayman Islands' },
];




  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  navigateToFormSection() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  hajjSubmit() {
    if (this.visaForm.valid) {
      console.log(this.visaForm.value);
      this.authService.hajjVisa(this.visaForm.value).subscribe((response: any) => {
        console.log(response); // Log the entire response
        if (response.msg && response.msg.includes('successfully')) { // Check for success message
          this.message = 'Application submitted successfully!'; // Set success message
          this.messageType = 'success'; // Set message type to success
        } else {
          this.message = 'Submission failed: ' + response.msg; // Set error message
          this.messageType = 'error'; // Set message type to error
          console.error('Submission failed:', response); // Log if submission failed
        }
        this.closeModal();
        
        // Reset the form and clear the message after 3 seconds
        setTimeout(() => {
          this.visaForm.reset(); // Reset the form
          this.closeMessage(); // Clear the message
        }, 3000);
        
      }, (error) => {
        this.message = 'An error occurred during submission.'; // Set error message
        this.messageType = 'error'; // Set message type to error
        console.error('Error occurred:', error); // Log any errors
        
        // Reset the form and clear the message after 3 seconds
        setTimeout(() => {
          this.visaForm.reset(); // Reset the form
          this.closeMessage(); // Clear the message
        }, 3000);
      });
    }
  }

  showMessage(message: string, type: string): void {
    console.log(`Displaying message: ${message}, Type: ${type}`);
    this.message = message;
    this.messageType = type;
  
    // Auto-close the message after 5 seconds
    setTimeout(() => {
      this.closeMessage();
    }, 5000);
  }
  

  // Close the message
  closeMessage(): void {
    this.message = '';
    this.messageType = '';
  }

  EvisaFormSection() {
    this.showEvisaModal = true;
  }
  

  closeEvisaModal() {
    this.showEvisaModal = false;
    this.visaForm.reset();
  }

  onEvisaSubmit() {
    if (this.evisaForm.valid) {
      console.log(this.evisaForm.value);
      this.authService.Evisa(this.evisaForm.value).subscribe((response: any) => {
        console.log(response); // Log the entire response
        if (response.msg && response.msg.includes('successfully')) { // Check for success message
          this.message = 'E-Visa application submitted successfully!'; // Set success message
          this.messageType = 'success'; // Set message type to success
        } else {
          this.message = 'Submission failed: ' + response.msg; // Set error message
          this.messageType = 'error'; // Set message type to error
          console.error('Submission failed:', response); // Log if submission failed
        }
        this.closeEvisaModal();
        
        // Reset the form and clear the message after 3 seconds
        setTimeout(() => {
          this.evisaForm.reset(); // Reset the form
          this.closeMessage(); // Clear the message
        }, 3000);
        
      }, (error) => {
        this.message = 'An error occurred during submission.'; // Set error message
        this.messageType = 'error'; // Set message type to error
        console.error('Error occurred:', error); // Log any errors
        
        // Reset the form and clear the message after 3 seconds
        setTimeout(() => {
          this.evisaForm.reset(); // Reset the form
          this.closeMessage(); // Clear the message
        }, 3000);
      });
    }
  }
}