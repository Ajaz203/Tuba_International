import { Component, Input } from '@angular/core';
import { PagesService } from '../../../shared/services/pages.service';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { BreadcrumbsComponent } from '../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instant-visa',
  standalone: true,
  providers: [PagesService],
  templateUrl: './instant-visa.component.html',
  styleUrl: './instant-visa.component.scss',
  imports: [LayoutComponent, CommonModule, FooterComponent, BreadcrumbsComponent, HeaderComponent]
})
export class InstantVisaComponent {
  constructor(private router: Router) {}
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
 

  
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  navigateToFormSection() {
    this.router.navigate(['/apply-visa']);
  }


  
}