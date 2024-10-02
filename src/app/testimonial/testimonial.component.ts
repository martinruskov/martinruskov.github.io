import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.less'
})
export class TestimonialComponent {

  @Input() message?: string;
  @Input() author?: string;

}
