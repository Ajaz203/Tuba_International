import { Component, Input } from '@angular/core';
import { testimonial } from '../../../../shared/interface/hotel-classic';
import { TestimonialTwoComponent } from './testimonial-two/testimonial-two.component';
import { TestimonialOneComponent } from './testimonial-one/testimonial-one.component';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss'],
    standalone: true,
    imports: [TestimonialOneComponent, TestimonialTwoComponent]
})
export class TestimonialComponent {

  @Input() type: string;
  @Input() testimonial: testimonial[];

}
