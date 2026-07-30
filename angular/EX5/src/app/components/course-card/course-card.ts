import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {

  @Input() course: any;

  enrolled = true;
  isExpanded = false;

  get cardClasses() {
    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

}